"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";

export type State = {
  message?: string | null;
  errors?: {
    title?: string[];
  };
};

const CreateBoardSchema = z.object({
  title: z.string().min(3, {
    message: "Minimum length of 3 letters is required.",
  }),
});

export async function createBoardAction(prevState: State, formData: FormData) {
  const valildatedFields = CreateBoardSchema.safeParse({
    title: formData.get("title"),
  });

  if (!valildatedFields.success) {
    return {
      message: "Missing fields.",
      errors: valildatedFields.error.flatten().fieldErrors,
    };
  }

  const { title } = valildatedFields.data;

  try {
    await db.board.create({
      data: {
        title,
      },
    });
  } catch (e) {
    return {
      message: "DB error",
    };
  }

  revalidatePath("/organization/org_2cZ4J5alUjzu7oLAXoJfzeHi0PN");
  redirect("/organization/org_2cZ4J5alUjzu7oLAXoJfzeHi0PN");
}
