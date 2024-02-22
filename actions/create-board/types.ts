import { z } from "zod";

import { board } from "@prisma/client";
import { ActionState } from "@/lib/create-safe-action";

export const CreateBoard = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title is required",
    })
    .min(3, {
      message: "Title is too short",
    }),
});

export type InputType = z.infer<typeof CreateBoard>;
export type ReturnType = ActionState<InputType, board>;
