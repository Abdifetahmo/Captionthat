"use client";

import { useRef, useState } from "react";

type ImageUploaderProps = {
  imageUrl: string | null;
  onImageSelect: (file: File) => void;
};

export default function ImageUploader({ imageUrl, onImageSelect }: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file: File | undefined) => {
    if (!file || !file.type.startsWith("image/")) {
      return;
    }
    onImageSelect(file);
  };

  return (
    <div className="space-y-3">
      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            inputRef.current?.click();
          }
        }}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(event) => {
          event.preventDefault();
          setIsDragging(false);
          handleFile(event.dataTransfer.files[0]);
        }}
        className={`relative flex min-h-56 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-dashed border-border bg-zinc-900/50 p-4 text-center transition hover:border-zinc-500 ${
          isDragging ? "dropzone-active border-zinc-400" : ""
        }`}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="Uploaded preview" className="h-full max-h-80 w-full rounded-xl object-contain" />
        ) : (
          <div className="space-y-2">
            <p className="text-base font-medium text-zinc-100">Drag & drop an image here</p>
            <p className="text-sm text-zinc-400">or click to upload</p>
          </div>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(event) => handleFile(event.target.files?.[0])}
      />
    </div>
  );
}
