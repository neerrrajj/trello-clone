import { HelpCircle, Plus, User2 } from "lucide-react";

import { FormPopover } from "@/components/form/form-popover";
import { Hint } from "@/components/hint";

export const BoardList = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center font-semibold text-lg text-neutral-700">
        <User2 className="h-5 w-5 mr-2" />
        Your Boards
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <FormPopover sideOffset={10} side="right">
          <div
            role="button"
            className="aspect-video relative h-full w-full border border-slate-700 bg-slate-100 rounded-md flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition px-6 py-10 md:p-10"
          >
            <Plus className="h-6 w-6 mb-2" />
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
