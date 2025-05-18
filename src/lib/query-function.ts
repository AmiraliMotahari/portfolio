import { ReadonlyURLSearchParams } from "next/navigation";

export const createQueryFunction = (
  params: Record<string, string | number | null>,
  searchParams: ReadonlyURLSearchParams,
  pathName: string
) => {
  const newSearchParams = new URLSearchParams(searchParams?.toString());

  for (const [key, value] of Object.entries(params)) {
    if (value == null) {
      newSearchParams.delete(key);
    } else {
      newSearchParams.set(key, String(value));
    }
  }

  return `${pathName}?${newSearchParams.toString()}`;
};
