"use client";

import { useFormStatus } from "react-dom";
import { forwardRef } from "react";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { FormErrors } from "./form-errors";

interface FormInputProps {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errors?: Record<string, string[] | undefined>;
  className?: string;
  defaultValue?: string;
  onBlur?: () => void;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      id,
      label,
      type,
      placeholder,
      required,
      disabled,
      errors,
      className,
      defaultValue = "",
      onBlur,
    },
    ref
  ) => {
    const { pending } = useFormStatus();

    return (
      <div className="space-y-2">
        <div className="space-y-1">
          {label ? (
            <Label
              htmlFor={id}
              className="text-xs font-semibold text-neutral-700"
            >
              {label}
            </Label>
          ) : null}
          <div className="flex border rounded-md border-gray-900 align items-center">
            <Input
              onBlur={onBlur}
              defaultValue={defaultValue}
              ref={ref}
              required={required}
              name={id}
              id={id}
              placeholder={placeholder}
              type={type}
              disabled={pending || disabled}
              className={cn(
                "text-sm h-9 border-none focus-visible:ring-0 focus-visible:ring-offset-0 pr-0",
                className
              )}
              aria-describedby={`${id}-error`}
            />
            <Button
              type="reset"
              variant="ghost"
              size="sm"
              disabled={pending}
              className="hover:bg-inherit text-neutral-600"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <FormErrors id={id} errors={errors} />
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
