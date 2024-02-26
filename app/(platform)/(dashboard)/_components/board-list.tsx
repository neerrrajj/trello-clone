import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";
import { HelpCircle, User2 } from "lucide-react";

import { FormPopover } from "@/components/form/form-popover";
import { Skeleton } from "@/components/ui/skeleton";
import { Hint } from "@/components/hint";

import { db } from "@/lib/db";

export const BoardList = async () => {
  const { orgId } = auth();

  if (!orgId) {
    return redirect("/select-org");
  }

  const boards = await db.board.findMany({
    where: { orgId },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-4 pb-4">
      <div className="flex items-center font-semibold text-base text-neutral-700">
        <User2 className="h-5 w-5 mr-2" />
        Your boards
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {boards.map((board) => (
          <Link
            key={board.id}
            href={`/board/${board.id}`}
            className="group relative aspect-video bg-no-repeat bg-center bg-cover bg-sky-700 rounded-md h-32 w-full p-2 overflow-hidden"
            style={{ backgroundImage: `url(${board.imageThumbUrl})` }}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <p className="relative font-semibold text-white">{board.title}</p>
          </Link>
        ))}
        <FormPopover sideOffset={10} side="right">
          <div
            role="button"
            className="aspect-video relative h-32 w-full border border-slate-700 bg-muted rounded-md flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition space-y-2"
          >
            <p className="text-sm">Create new board</p>
            <div className="flex items-center gap-2">
              <span className="text-xs">5 remaining</span>
              <Hint
                sideOffset={10}
                side="right"
                description={`Free Workspaces can have up to 5 open boards. For unlimited boards upgrade this workspace.`}
              >
                <HelpCircle className="h-3 w-3" />
              </Hint>
            </div>
          </div>
        </FormPopover>
      </div>
    </div>
  );
};

BoardList.Skeleton = function SkeletonBoardList() {
  return (
    <>
      <div className="flex items-center font-semibold text-base text-neutral-700">
        <User2 className="h-5 w-5 mr-2" />
        Your boards
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <Skeleton className="aspect-video h-32 w-full p-2" />
        <Skeleton className="aspect-video h-32 w-full p-2" />
        <Skeleton className="aspect-video h-32 w-full p-2" />
        <Skeleton className="aspect-video h-32 w-full p-2" />
        <Skeleton className="aspect-video h-32 w-full p-2" />
        <Skeleton className="aspect-video h-32 w-full p-2" />
        <Skeleton className="aspect-video h-32 w-full p-2" />
        <Skeleton className="aspect-video h-32 w-full p-2" />
      </div>
    </>
  );
};
