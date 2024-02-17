import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { headingFont } from "@/app/layout";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition flex items-center gap-x-2">
        <Image src="/logo.svg" alt="Logo" height={30} width={30} />
        <p className={cn("text-lg text-neutral-700", headingFont.className)}>
          Taskify
        </p>
      </div>
    </Link>
  );
};
