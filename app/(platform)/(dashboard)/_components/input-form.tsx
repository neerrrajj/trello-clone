"use client";

import { useFormState } from "react-dom";

import { createBoardAction } from "@/actions/create-board";
import { FormClose, FormInput, FormSubmit } from "./input-form-utils";

export const Form = () => {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createBoardAction, initialState);
  //   const { pending } = useFormStatus();

  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center border border-black rounded-r-lg">
          <FormInput />
          <FormClose />
          <FormSubmit />
        </div>
        {state?.errors?.title ? (
          <div>
            {state?.errors.title.map((error) => (
              <p className="text-rose-500 text-sm">{error}</p>
            ))}
          </div>
        ) : null}
      </div>
    </form>
  );
};
