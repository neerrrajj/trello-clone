"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";

const CreateBoardSchema = z.object({
  title: z.string(),
});

export async function createBoardAction(formData: FormData) {
  const { title } = CreateBoardSchema.parse({
    title: formData.get("title"),
  });

  await db.board.create({
    data: {
      title,
    },
  });

  revalidatePath("/organization/org_2cZ4J5alUjzu7oLAXoJfzeHi0PN");
}
