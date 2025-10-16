"use server";

import ClientConfirmationEmail from "@/components/email/client-confirmation";
import OwnerNotificationEmail from "@/components/email/owner-notification";
import { user } from "@/lib/data";
import { actionClient } from "@/lib/safe-actions";
import { contactFormSchema, ContactFormSchemaType } from "@/lib/zod-schema";
import { flattenValidationErrors } from "next-safe-action";
import { verifyTurnstileToken } from "react-cloudflare-turnstile";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// TODO: Update
// TODO: Add rate-limit
export const sendMessageAction = actionClient
  .metadata({ actionName: "sendMessageAction" })
  .schema(contactFormSchema, {
    handleValidationErrorsShape: async (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .action(
    async ({ parsedInput: data }: { parsedInput: ContactFormSchemaType }) => {
      // Send confirmation email to the client
      const fullName = `${user.personalInfo.firstName} ${user.personalInfo.lastName}`;
      const email = user.personalInfo.email;
      const fromUrl = "contact.amiralimotahari.com";
      const webUrl =
        process.env.NEXT_PUBLIC_URL ?? "https://amiralimotahari.com";

      await verifyTurnstileToken({
        turnstileSecretKey: process.env
          .CLOUDFLARE_TURNSTILE_SECRET_KEY as string,
        token: data.validationToken,
      });

      const clientEmailResponse = await resend.emails.send({
        from: `${fullName} <no-reply@${fromUrl}>`,
        to: data.email,
        subject: `Thank you for contacting ${data.name}`,
        react: ClientConfirmationEmail({
          name: data.name,
          message: data.message,
          portfolioOwner: fullName,
          portfolioWebsite: webUrl,
        }),
      });

      // Send notification email to the portfolio owner
      const ownerEmailResponse = await resend.emails.send({
        from: `Contact Form <no-reply@${fromUrl}>`,
        to: email,
        subject: `New Contact Form: ${data.subject}`,
        react: OwnerNotificationEmail({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          portfolioOwner: fullName,
          portfolioWebsite: webUrl,
          submittedAt: new Date(),
        }),
      });

      if (clientEmailResponse.error || ownerEmailResponse.error) {
        throw new Error(
          clientEmailResponse.error?.message ||
            ownerEmailResponse.error?.message ||
            "Failed to send email"
        );
      }

      return {
        message: "Thank you for your message. I'll get back to you soon.",
        result: data,
      };
    }
  );
