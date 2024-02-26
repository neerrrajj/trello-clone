import { Board } from "@prisma/client";
import { z } from "zod";

import { ActionState } from "@/lib/create-safe-action";

export const DeleteBoard = z.object({
  id: z.string(),
});

export type InputType = z.infer<typeof DeleteBoard>;
export type ReturnType = ActionState<InputType, Board>;
