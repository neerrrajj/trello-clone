import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BoardItem } from "../../_components/board-item";

import { db } from "@/lib/db";
import { createBoardAction } from "@/actions/create-board";

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
      <form action={createBoardAction}>
        <div className="flex items-center border border-black rounded-r-lg">
          <input
            required
            id="title"
            name="title"
            placeholder="Enter a board title"
            className="p-1.5 focus:outline-none"
          />
          <Button type="reset" variant="ghost" className="hover:bg-inherit">
            <X className="h-4 w-4" />
          </Button>
          <Button type="submit" className="rounded-l-none text-sm">
            Submit
          </Button>
        </div>
      </form>
      <h1 className="text-lg font-medium ">Boards:</h1>
      <div className="space-y-4">
        {boards.map((board) => (
          <BoardItem key={board.id} title={board.title} id={board.id} />
        ))}
      </div>
    </div>
  );
};

export default OrganizationIdPage;
