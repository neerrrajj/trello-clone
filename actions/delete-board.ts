"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";

export async function deleteBoardAction(id: string) {
  await db.board.delete({
    where: { id },
  });

  revalidatePath("/organization/org_2cZ4J5alUjzu7oLAXoJfzeHi0PN");
}
