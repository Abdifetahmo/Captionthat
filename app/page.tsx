"use client";

import { useEffect, useState } from "react";
import CaptionGenerator from "@/components/CaptionGenerator";
import ImageUploader from "@/components/ImageUploader";
import StyleSelector from "@/components/StyleSelector";
import { CaptionStyle, captionStyles } from "@/lib/captions";

export default function Home() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [activeStyle, setActiveStyle] = useState<CaptionStyle>(captionStyles[0]);

  useEffect(() => {
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  const handleImageSelect = (file: File) => {
    setImageUrl((prev) => {
      if (prev) {
        URL.revokeObjectURL(prev);
      }
      return URL.createObjectURL(file);
    });
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl items-center px-4 py-10">
      <section className="w-full rounded-3xl border border-border bg-card p-6 shadow-soft md:p-10">
        <header className="mb-8 space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Caption That</h1>
          <p className="text-base text-zinc-400 md:text-lg">Upload an image. Ruin it with a caption.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">1. Upload</h2>
            <ImageUploader imageUrl={imageUrl} onImageSelect={handleImageSelect} />
          </div>
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">2. Pick a style</h2>
            <StyleSelector activeStyle={activeStyle} onSelectStyle={setActiveStyle} />
            <h2 className="pt-2 text-sm font-semibold uppercase tracking-wider text-zinc-400">3. Caption chaos</h2>
            <CaptionGenerator style={activeStyle} disabled={!imageUrl} />
          </div>
        </div>
      </section>
    </main>
  );
}
