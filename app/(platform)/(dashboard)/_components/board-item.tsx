import { deleteBoardAction } from "@/actions/delete-board";
import { FormDelete } from "../../../../components/form/form-delete";

interface BoardItemProps {
  title: string;
  id: string;
}

export const BoardItem = ({ title, id }: BoardItemProps) => {
  const deleteBoardWithId = deleteBoardAction.bind(null, id);

  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-3">
      <FormDelete />
      <p>{title}</p>
    </form>
  );
};
