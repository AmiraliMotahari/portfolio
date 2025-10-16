import { useEffect, useState } from "react";

export function useIsApple() {
  const [isApple, setIsApple] = useState(true);

  const detect = (platform: string) => {
    const value = platform.toLocaleLowerCase();
    return (
      value.includes("mac") ||
      value.includes("iphone") ||
      value.includes("ipod") ||
      value.includes("ipad")
    );
  };

  useEffect(() => {
    setIsApple(detect(navigator.platform));
  }, []);

  return isApple;
}
