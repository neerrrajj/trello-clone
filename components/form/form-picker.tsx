"use client";

import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

import { defaultImages } from "@/constants/images";
import { unsplash } from "@/lib/unsplash";
import { FormErrors } from "./form-errors";

interface FormPickerProps {
  id: string;
  errors?: Record<string, string[] | undefined>;
}

export const FormPicker = ({ id, errors }: FormPickerProps) => {
  const [images, setImages] = useState<Array<Record<string, any>>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImageId, setSelectedImageId] = useState(null);
  const { pending } = useFormStatus();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await unsplash.photos.getRandom({
          collectionIds: ["317099"],
          count: 9,
        });
        if (result && result.response) {
          const imageResults = result.response as Array<Record<string, any>>;
          setImages(imageResults);
        } else {
          console.error("Failed to get images from Unsplash");
        }
      } catch (e) {
        console.log(e);
        setImages(defaultImages);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-1 mb-2">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="aspect-video ">
            <Skeleton className="rounded-sm h-full w-full" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-3 gap-1 mb-2">
        {images.map((image) => (
          <div
            className={cn(
              "cursor-pointer relative aspect-video group hover:outline hover:outline-black hover:outline-offset-2 hover:outline-1 rounded-sm transition bg-muted",
              pending && "opacity-50 hover:opacity-50 cursor-auto"
            )}
            onClick={() => {
              if (pending) return;
              setSelectedImageId(
                selectedImageId === image.id ? null : image.id
              );
            }}
          >
            <input
              type="radio"
              id={id}
              name={id}
              className="hidden"
              checked={selectedImageId === image.id}
              disabled={pending}
              value={`${image.id}|${image.urls.thumb}|${image.urls.full}|${image.links.html}|${image.user.name}`}
            />
            <Image
              fill
              src={image.urls.thumb}
              alt="Unsplash image"
              className="rounded-sm object-cover"
            />
            {selectedImageId === image.id && (
              <div className="absolute inset-y-0 h-full w-full bg-black/35 flex items-center justify-center">
                <Check className="h-4 w-4 text-white" />
              </div>
            )}
            <Link
              href={image.links.html}
              target="_blank"
              className="opacity-0 group-hover:opacity-100 absolute bottom-0 w-full text-[10px] truncate text-white hover:underline p-1 bg-black/50 rounded-b-sm"
            >
              {image.user.name}
            </Link>
          </div>
        ))}
      </div>
      {!selectedImageId && <FormErrors id="image" errors={errors} />}
    </div>
  );
};
