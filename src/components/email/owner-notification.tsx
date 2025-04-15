import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface OwnerNotificationEmailProps {
  name: string;
  email: string;
  subject?: string;
  message: string;
  portfolioOwner?: string;
  portfolioWebsite?: string;
  submittedAt?: Date;
}

export const OwnerNotificationEmail = ({
  name = "John Doe",
  email = "john@example.com",
  subject = "Project Inquiry",
  message = "I'm interested in working with you on a new project. Let's discuss the details.",
  portfolioOwner = "Creative Developer",
  submittedAt = new Date(),
}: OwnerNotificationEmailProps) => {
  const previewText = `New contact form submission from ${name}`;
  const formattedDate = submittedAt.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-gray-900 my-auto mx-auto font-sans">
          <Container className="border border-gray-800 rounded-lg my-10 mx-auto p-5 max-w-[600px]">
            <Section className="mt-8">
              <Heading className="text-white text-center text-2xl font-bold">
                New Contact Form Submission
              </Heading>
              <Text className="text-green-400 text-center text-base font-medium">
                Someone wants to connect with you!
              </Text>
              <Hr className="border-gray-700 my-6" />
            </Section>
            <Section>
              <Section className="bg-gray-800 rounded-lg p-6 my-6">
                <Heading className="text-white text-xl font-bold mb-4">
                  Contact Details
                </Heading>

                <Text className="text-gray-300 text-base mb-1">
                  <Text className="text-gray-400 inline">Name: </Text>
                  {name}
                </Text>

                <Text className="text-gray-300 text-base mb-1">
                  <Text className="text-gray-400 inline">Email: </Text>
                  <Link
                    href={`mailto:${email}`}
                    className="text-green-400 underline"
                  >
                    {email}
                  </Link>
                </Text>

                <Text className="text-gray-300 text-base mb-1">
                  <Text className="text-gray-400 inline">Subject: </Text>
                  {subject}
                </Text>

                <Text className="text-gray-300 text-base mb-1">
                  <Text className="text-gray-400 inline">Submitted: </Text>
                  {formattedDate}
                </Text>

                <Hr className="border-gray-700 my-4" />

                <Text className="text-gray-400 text-base mb-2">Message:</Text>
                <Text className="text-white text-base bg-gray-700 p-4 rounded-md">
                  {message}
                </Text>
              </Section>

              <Button
                href={`mailto:${email}`}
                className="bg-green-400 text-black font-bold px-6 py-3 rounded-md text-center block mx-auto my-8"
              >
                Reply to {name}
              </Button>
            </Section>
            <Hr className="border-gray-700 my-6" />
            <Section>
              <Text className="text-gray-400 text-sm text-center">
                © {new Date().getFullYear()} {portfolioOwner}. All rights
                reserved.
              </Text>
              <Text className="text-gray-400 text-xs text-center">
                This is an automated notification from your portfolio website.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default OwnerNotificationEmail;
