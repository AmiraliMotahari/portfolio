"use client";

import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle, Send } from "lucide-react";
import { useAction } from "next-safe-action/hooks";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import { contactFormSchema, ContactFormSchemaType } from "@/lib/zod-schema";
import InputWithLabel from "../inputs/input-with-label";
import TextareaWithLabel from "../inputs/textarea-with-label";
import { sendMessageAction } from "@/app/actions/send-message";

export default function ContactForm() {
  const form = useForm<ContactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { execute, isPending } = useAction(sendMessageAction, {
    onSuccess({ data }) {
      if (data?.message) {
        toast("Message sent!", {
          description: data.message,
        });
      }
      form.reset();
    },
    onError({ error }) {
      toast("Error", {
        description: error.serverError,
      });
    },
  });

  function onSubmit(values: ContactFormSchemaType) {
    console.log(values);

    execute(values);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="glass-card p-8">
        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <InputWithLabel<ContactFormSchemaType>
              nameInSchema="name"
              fieldTitle="Name"
              placeholder="Your full name"
            />
            <InputWithLabel<ContactFormSchemaType>
              nameInSchema="email"
              fieldTitle="Email"
              placeholder="Your email"
            />
            <InputWithLabel<ContactFormSchemaType>
              nameInSchema="subject"
              fieldTitle="Subject"
              placeholder="Subject"
            />
            <TextareaWithLabel<ContactFormSchemaType>
              nameInSchema="message"
              fieldTitle="Message"
              placeholder="Your message"
              className="min-h-[120px]"
            />
            <Button
              type="submit"
              disabled={isPending}
              className="w-full text-black"
            >
              {isPending ? (
                <>
                  <LoaderCircle className="animate-spin" />
                  <span>Loading</span>
                </>
              ) : (
                <span className="flex items-center">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </span>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </motion.div>
  );
}
