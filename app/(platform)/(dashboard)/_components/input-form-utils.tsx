"use client";

import { X } from "lucide-react";
import { useFormStatus } from "react-dom";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const FormInput = () => {
  const { pending } = useFormStatus();
  return (
    <div>
      <Input
        required
        id="title"
        name="title"
        placeholder="Enter a board title"
        className="border-none"
        disabled={pending}
      />
    </div>
  );
};

export const FormClose = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="reset"
      variant="ghost"
      disabled={pending}
      className="hover:bg-inherit"
    >
      <X className="h-4 w-4" />
    </Button>
  );
};

export const FormSubmit = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="rounded-l-none text-sm">
      Submit
    </Button>
  );
};

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
