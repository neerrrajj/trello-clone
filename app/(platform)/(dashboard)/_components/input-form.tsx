"use client";

import { FormClose, FormInput, FormSubmit } from "./input-form-utils";
import { createBoard } from "@/actions/create-board";
import { useAction } from "@/lib/hooks/use-action";

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "SUCCESS");
    },
    onError: (error) => {
      console.log("b");
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center border border-black rounded-r-lg">
          <FormInput />
          <FormClose />
          <FormSubmit />
        </div>
        {fieldErrors?.title ? (
          <div>
            {fieldErrors.title.map((error) => (
              <p className="text-rose-500 text-sm">{error}</p>
            ))}
          </div>
        ) : null}
      </div>
    </form>
  );
};
