import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { cn } from "@/lib/utils";
import { Path, useFormContext } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { TextareaHTMLAttributes } from "react";

type TextareaWithLabelProps<S> = {
  nameInSchema: Path<S>;
  fieldTitle: string;
  description?: string;
  className?: string;
  textareaClassName?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

function TextareaWithLabel<S>({
  nameInSchema,
  fieldTitle,
  description,
  textareaClassName,
  className,
  ...props
}: TextareaWithLabelProps<S>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem className={cn("", className)}>
          <FormLabel>{fieldTitle}</FormLabel>
          <FormControl>
            <Textarea {...field} {...props} className={textareaClassName} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default TextareaWithLabel;
