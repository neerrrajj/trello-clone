"use client";

import { FormInput } from "@/components/form/form-input";

import { createBoard } from "@/actions/create-board";
import { useAction } from "@/lib/hooks/use-action";

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "- SUCCESS");
    },
    onError: (error) => {
      console.log(error, "- ERROR");
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <FormInput id="title" label="Board Name" errors={fieldErrors} />
    </form>
  );
};
