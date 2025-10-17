import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notfound");

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 px-6 py-12 text-center md:gap-8 md:px-8 md:py-24">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold tracking-tighter text-primary">
          {t("h1")}
        </h1>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          {t("h2")}
        </h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
          {t("paragraph")}
        </p>
      </div>
      <div className="flex flex-col gap-2 min-[400px]:flex-row">
        <Button asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            {t("backButton")}
          </Link>
        </Button>
      </div>
      <div className="mt-4">
        <Button asChild variant={"link"}>
          <Link
            href="/projects"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("viewButton")}
          </Link>
        </Button>
      </div>
    </div>
  );
}
