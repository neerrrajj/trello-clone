"use client";

import { ElementRef, useRef, useState } from "react";
import { Board } from "@prisma/client";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/form/form-input";

import { useAction } from "@/lib/hooks/use-action";
import { updateBoard } from "@/actions/update-board";

export const BoardTitleForm = ({ data }: { data: Board }) => {
  const { execute } = useAction(updateBoard, {
    onSuccess: (data) => {
      if (title !== data.title) {
        toast.success(`Board "${data.title}" updated!`);
        setTitle(data.title);
      }
      disableEditing();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(data.title);

  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({ title, id: data.id });
  };

  const onBlur = () => {
    formRef.current?.requestSubmit();
  };

  if (isEditing) {
    return (
      <form
        ref={formRef}
        action={onSubmit}
        className="flex items-center gap-x-2"
      >
        <FormInput
          ref={inputRef}
          id="title"
          onBlur={onBlur}
          defaultValue={title}
          className="text-lg font-bold px-[7px] py-1 h-7 bg-transparent"
        />
      </form>
    );
  }

  return (
    <Button
      onClick={enableEditing}
      variant={"transparent"}
      className="font-bold text-lg h-auto w-auto p-1 px-2"
    >
      {title}
    </Button>
  );
};
