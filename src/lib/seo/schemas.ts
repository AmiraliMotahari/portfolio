import { BreadcrumbItem } from "@/lib/types";
import {
  BreadcrumbList,
  WebPage,
  WebSite,
  WithContext,
} from "schema-dts";

export const stringUrl = (pagePath: string, origin: string) => {
  return new URL(pagePath, origin).toString();
};

export function getWebsiteSchema(webUrl: string): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${webUrl}/#website`,
    name: "Amirali Motahari",
    url: webUrl,
    //* Add if search is implemented
    // potentialAction: {
    //   "@type": "SearchAction",
    //   target: `${webUrl}/search?q={search_term_string}`,
    //   "query-input": "required name=search_term_string",
    // },
  };
}

export function getWebPageSchema({
  webUrl,
  pagePath,
  pageName,
  description,
  type = "WebPage",
}: {
  webUrl: string;
  pagePath: string;
  pageName: string;
  description: string;
  type?: WebPage["@type"]; // Can be AboutPage, ContactPage, etc.
}): WithContext<WebPage> {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name: pageName,
    url: stringUrl(pagePath, webUrl),
    description,
  };
}

export function generateBreadcrumbSchema(
  items: BreadcrumbItem[]
): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
