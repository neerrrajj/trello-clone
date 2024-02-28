import { List } from "@prisma/client";
import { z } from "zod";

import { ActionState } from "@/lib/create-safe-action";

export const CreateList = z.object({
  title: z.string({
    required_error: "Title is required",
    invalid_type_error: "Title is required",
  }),
  boardId: z.string(),
});

export type InputType = z.infer<typeof CreateList>;
export type ReturnType = ActionState<InputType, List>;
