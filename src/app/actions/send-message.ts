"use server"

import { actionClient } from "@/lib/safe-actions";
import { contactFormSchema, ContactFormSchemaType } from "@/lib/zod-schema";
import { flattenValidationErrors } from "next-safe-action";

export const sendMessageAction = actionClient
  .metadata({ actionName: "sendMessageAction" })
  .schema(contactFormSchema, {
    handleValidationErrorsShape: async (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .action(
    async ({ parsedInput: data }: { parsedInput: ContactFormSchemaType }) => {
      //todo: add captcha
      console.log(data);

      return {
        message: "Thank you for your message. I'll get back to you soon.",
        result: data,
      };
    }
  );
