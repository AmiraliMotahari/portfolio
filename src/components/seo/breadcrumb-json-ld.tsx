import { generateBreadcrumbSchema } from "@/lib/seo/schemas";
import { BreadcrumbItem } from "@/lib/types";
import Script from "next/script";

export default function BreadcrumbJsonLd({
  items,
  id = "breadcrumb-schema",
}: {
  items: BreadcrumbItem[];
  id?: string;
}) {
  const schema = generateBreadcrumbSchema(items);

  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
