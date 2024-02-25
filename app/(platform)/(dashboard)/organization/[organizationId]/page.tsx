import { Suspense } from "react";

import { Separator } from "@/components/ui/separator";
import { Info } from "../../_components/info";
import { BoardList } from "../../_components/board-list";

const OrganizationIdPage = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Info />
      <Separator />
      <Suspense fallback={<BoardList.Skeleton />}>
        <BoardList />
      </Suspense>
    </div>
  );
};

export default OrganizationIdPage;
