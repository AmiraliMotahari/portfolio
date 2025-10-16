import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface ClientConfirmationEmailProps {
  name: string;
  message: string;
  portfolioOwner?: string;
  portfolioWebsite?: string;
}

export const ClientConfirmationEmail = ({
  name = "John Doe",
  message = "I'm interested in working with you on a new project. Let's discuss the details.",
  portfolioOwner = "Amirali Motahari",
  portfolioWebsite = "portfolio.example.com",
}: ClientConfirmationEmailProps) => {
  const previewText = `Thank you for contacting ${portfolioOwner}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-gray-900 my-auto mx-auto font-sans">
          <Container className="border border-gray-800 rounded-lg my-10 mx-auto p-5 max-w-[600px]">
            <Section className="mt-8">
              <Img
                src={`https://${portfolioWebsite}/logo.png`}
                width="40"
                height="40"
                alt="Logo"
                className="mx-auto"
              />
              <Heading className="text-white text-center text-2xl font-bold mt-4">
                Thanks for reaching out!
              </Heading>
              <Hr className="border-gray-700 my-6" />
            </Section>
            <Section>
              <Text className="text-gray-300 text-base">Hello {name},</Text>
              <Text className="text-gray-300 text-base">
                Thank you for contacting me. I&apos;ve received your message and
                will get back to you as soon as possible.
              </Text>
              <Section className="bg-gray-800 rounded-lg p-4 my-6">
                <Text className="text-gray-300 text-base font-medium">
                  Here&apos;s a copy of your message:
                </Text>
                <Text className="text-gray-400 text-sm italic">{message}</Text>
              </Section>
              <Button
                href={`${portfolioWebsite}`}
                className="bg-gradient-to-r from-green-400 to-pink-500 text-black font-bold px-6 py-3 rounded-md text-center block mx-auto my-8"
              >
                Visit My Portfolio
              </Button>
            </Section>
            <Hr className="border-gray-700 my-6" />
            <Section>
              <Text className="text-gray-400 text-sm text-center">
                © {new Date().getFullYear()} {portfolioOwner}. All rights
                reserved.
              </Text>
              <Text className="text-gray-400 text-xs text-center">
                You received this email because you submitted a contact form on
                my website.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ClientConfirmationEmail;
