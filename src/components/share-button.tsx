"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import {
  Check,
  Facebook,
  Linkedin,
  LinkIcon,
  Share2,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import XIcon from "./icons/x-icon";

type ShareButtonProps = {
  title: string;
  size?: "icon" | "default" | "sm" | "lg" | null | undefined;
  className?: string;
};

const ShareButton = ({ title, size="sm", className }: ShareButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, []);

  const shareLinks: Record<string, string> = {
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      shareUrl
    )}&title=${encodeURIComponent(title)}`,
    x: `https://x.com/intent/tweet?url=${encodeURIComponent(
      shareUrl
    )}&text=${encodeURIComponent(title)}`,
    instagram: `https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      title + " " + shareUrl
    )}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}`,
  };

  const handleCopy = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(shareUrl)
        .then(() => {
          setIsCopied(true);
          toast("Copied!", {
            description: "The link is now in your clipboard.",
          });
          setTimeout(() => setIsCopied(false), 3000);
        })
        .catch(() => fallbackCopy());
    } else {
      fallbackCopy();
    }
  };

  const fallbackCopy = () => {
    const textArea = document.createElement("textarea");
    textArea.value = shareUrl;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setIsCopied(true);
    toast("Copied!", {
      description: "The link is now in your clipboard.",
    });
    setTimeout(() => setIsCopied(false), 3000);
  };

  const handleShare = (platform: string) => {
    if (platform === "copy") {
      handleCopy();
    } else {
      const shareWindow = window.open(shareLinks[platform], "_blank");
      if (!shareWindow) {
        toast("Popup Blocked", {
          description: "Please allow popups for sharing.",
        });
      }
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild aria-label="Share options">
        <Button
          variant="outline"
          size={size}
          className={cn("inline-flex items-center", className)}
        >
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className={"cursor-pointer"}
          onClick={() => handleShare("linkedin")}
        >
          <Linkedin className="mr-2 h-4 w-4" />
          LinkedIn
        </DropdownMenuItem>
        <DropdownMenuItem
          className={"cursor-pointer"}
          onClick={() => handleShare("x")}
        >
          <XIcon />X (Twitter)
        </DropdownMenuItem>
        <DropdownMenuItem
          className={"cursor-pointer"}
          onClick={() => handleShare("instagram")}
        >
          <Instagram className="mr-2 h-4 w-4" />
          Instagram
        </DropdownMenuItem>
        <DropdownMenuItem
          className={"cursor-pointer"}
          onClick={() => handleShare("whatsapp")}
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          WhatsApp
        </DropdownMenuItem>
        <DropdownMenuItem
          className={"cursor-pointer"}
          onClick={() => handleShare("facebook")}
        >
          <Facebook className="mr-2 h-4 w-4" />
          Facebook
        </DropdownMenuItem>
        <DropdownMenuItem
          className={"cursor-pointer"}
          onClick={() => handleShare("copy")}
        >
          {isCopied ? (
            <Check className="mr-2 h-4 w-4" />
          ) : (
            <LinkIcon className="mr-2 h-4 w-4" />
          )}
          {isCopied ? "Copied!" : "Copy Link"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShareButton;
