import { Form } from "../../_components/input-form";
import { BoardItem } from "../../_components/board-item";

import { db } from "@/lib/db";

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
      <Form />
      {boards.length != 0 && <h1 className="text-lg font-medium ">Boards:</h1>}

      <div className="space-y-4">
        {boards.map((board) => (
          <BoardItem key={board.id} title={board.title} id={board.id} />
        ))}
      </div>
    </div>
  );
};

export default OrganizationIdPage;
