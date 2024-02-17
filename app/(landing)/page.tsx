import Link from "next/link";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { headingFont, textFont } from "../layout";

const MarketingPage = () => {
  return (
    <div className="flex flex-col items-start sm:items-center justify-center px-4">
      <div className="mb-6 flex items-start sm:items-center border shadow-sm px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm">
        <Medal className="h-5 w-5 mr-2" />
        No 1 Task Managment App
      </div>
      <div
        className={cn(
          "flex items-start sm:items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-center text-neutral-800 mb-2">
          Taskify helps team move
        </h1>
        <div className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md w-fit">
          work forward.
        </div>
      </div>
      <div
        className={cn(
          "text-base md:text-xl text-neutral-400 mt-4 md:mt-6 max-w-xs md:max-w-2xl sm:text-center",
          textFont.className
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with Taskify.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get Taskify for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
