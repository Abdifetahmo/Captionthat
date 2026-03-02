"use client";

import { CaptionStyle, captionStyles } from "@/lib/captions";

type StyleSelectorProps = {
  activeStyle: CaptionStyle;
  onSelectStyle: (style: CaptionStyle) => void;
};

export default function StyleSelector({ activeStyle, onSelectStyle }: StyleSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {captionStyles.map((style) => {
        const isActive = activeStyle === style;
        return (
          <button
            key={style}
            type="button"
            onClick={() => onSelectStyle(style)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              isActive
                ? "border-zinc-200 bg-zinc-100 text-zinc-900 shadow"
                : "border-border bg-zinc-900 text-zinc-300 hover:border-zinc-500 hover:text-zinc-100"
            }`}
          >
            {style}
          </button>
        );
      })}
    </div>
  );
}
