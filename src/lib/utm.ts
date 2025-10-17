export function withUTM(url: string, params: Record<string, string>) {
  const u = new URL(url);
  Object.entries(params).forEach(([key, value]) => {
    u.searchParams.set(key, value);
  });
  return u.toString();
}
