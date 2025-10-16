import { useEffect, useState } from "react";

export type Platform =
  | "mac"
  | "ios"
  | "windows"
  | "android"
  | "linux"
  | "chromeos"
  | "unknown";

export function usePlatform() {
  const [platform, setPlatform] = useState<Platform | undefined>();

  function detectPlatform(raw: string, maxTouchPoints = 0): Platform {
    const s = (raw || "").toLowerCase();

    if (!s) return "unknown";
    // mac-like
    if (s.startsWith("mac")) {
      // iPadOS may report "MacIntel" — treat as iOS when touch-capable
      if (maxTouchPoints > 1) return "ios";
      return "mac";
    }
    if (s.includes("iphone") || s.includes("ipod") || s.includes("ipad"))
      return "ios";
    if (s.includes("win")) return "windows";
    if (s.includes("android")) return "android";
    if (s.includes("linux")) {
      // some Chromebooks / ChromeOS include "CrOS" or "cros"
      if (s.includes("cros") || s.includes("chromeos")) return "chromeos";
      return "linux";
    }
    if (s.includes("cros") || s.includes("chromeos")) return "chromeos";
    return "unknown";
  }

  useEffect(() => {
    setPlatform(
      detectPlatform(navigator.platform, Number(navigator.maxTouchPoints || 0))
    );
  }, []);

  return platform;
}
