"use client";

import { useFormStatus } from "react-dom";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";

export const FormDelete = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant="destructive"
      size="icon"
      className="rounded-full h-6 w-6"
      disabled={pending}
    >
      <X className="h-4 w-4" />
    </Button>
  );
};
