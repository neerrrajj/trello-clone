import { X } from "lucide-react";

import { Button } from "@/components/ui/button";

import { deleteBoardAction } from "@/actions/delete-board";

interface BoardItemProps {
  title: string;
  id: string;
}

export const BoardItem = ({ title, id }: BoardItemProps) => {
  const deleteBoardWithId = deleteBoardAction.bind(null, id);

  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-3">
      <Button
        type="submit"
        variant="destructive"
        size="icon"
        className="rounded-full h-6 w-6"
      >
        <X className="h-4 w-4" />
      </Button>
      <p>{title}</p>
    </form>
  );
};
