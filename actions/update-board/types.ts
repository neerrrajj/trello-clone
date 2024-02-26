import { Board } from "@prisma/client";
import { z } from "zod";

import { ActionState } from "@/lib/create-safe-action";

export const UpdateBoard = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title is required",
    })
    .min(3, {
      message: "Title is too short",
    }),
  id: z.string(),
});

export type InputType = z.infer<typeof UpdateBoard>;
export type ReturnType = ActionState<InputType, Board>;
