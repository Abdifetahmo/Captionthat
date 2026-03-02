"use client";

import { useMemo, useState } from "react";
import { CaptionStyle, generateCaption } from "@/lib/captions";

type CaptionGeneratorProps = {
  style: CaptionStyle;
  disabled?: boolean;
};

export default function CaptionGenerator({ style, disabled = false }: CaptionGeneratorProps) {
  const [caption, setCaption] = useState("");
  const [copied, setCopied] = useState(false);
  const [animSeed, setAnimSeed] = useState(0);

  const placeholderText = useMemo(
    () => (disabled ? "Upload an image to generate captions." : "Generate your first chaotic caption."),
    [disabled]
  );

  const handleGenerate = () => {
    const next = generateCaption(style);
    setCaption(next);
    setAnimSeed((value) => value + 1);
  };

  const handleCopy = async () => {
    if (!caption) {
      return;
    }
    await navigator.clipboard.writeText(caption);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <div className="space-y-4 rounded-2xl border border-border bg-zinc-900/70 p-5">
      <div className="min-h-24 rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
        {caption ? (
          <p key={animSeed} className="animate-fadeSlideIn text-lg leading-relaxed text-zinc-100">
            {caption}
          </p>
        ) : (
          <p className="text-zinc-500">{placeholderText}</p>
        )}
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          disabled={disabled}
          onClick={handleGenerate}
          className="rounded-xl bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-900 hover:-translate-y-0.5 hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          {caption ? "Generate Again" : "Generate Caption"}
        </button>
        <button
          type="button"
          disabled={!caption}
          onClick={handleCopy}
          className="rounded-xl border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 hover:border-zinc-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          {copied ? "Copied!" : "Copy to Clipboard"}
        </button>
      </div>
    </div>
  );
}
