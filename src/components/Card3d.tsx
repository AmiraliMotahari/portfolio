"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Image, { StaticImageData } from "next/image";

export function Card3d({
  title,
  text,
  image,
  urlTitle,
  url,
}: {
  title: string;
  text: string;
  image?: StaticImageData;
  urlTitle: string;
  url: string;
}) {
  return (
    <div className="h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
      <PinContainer title={urlTitle} href={url}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 line-clamp-1">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 line-clamp-2">{text}</span>
          </div>
          {!image && (
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          )}
          {image && (
            <div className="block w-full h-[192px] mt-4 relative">
              <Image
                src={image.src}
                alt="Project Cover"
                fill
                className="block rounded-lg object-cover object-center"
              />
            </div>
          )}
        </div>
      </PinContainer>
    </div>
  );
}
