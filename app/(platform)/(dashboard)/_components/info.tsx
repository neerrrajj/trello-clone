"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization } from "@clerk/nextjs";
import { CreditCard } from "lucide-react";
import Image from "next/image";

export const Info = () => {
  const { organization, isLoaded } = useOrganization();

  if (!isLoaded) return <Info.Skeleton />;

  return (
    <div className="flex items-center gap-x-4">
      <div className="w-[48px] h-[48px] relative">
        <Image
          fill
          src={organization?.imageUrl!}
          alt="Organization"
          className="rounded-md"
        />
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-lg">{organization?.name}</p>
        <div className="flex items-center text-xs text-muted-foreground">
          <CreditCard className="h-3 w-3 mr-1" />
          Free
        </div>
      </div>
    </div>
  );
};

Info.Skeleton = function InfoSkeleton() {
  return (
    <div className="flex items-center gap-x-4">
      <div className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] relative">
        <Skeleton className="w-full h-full absolute" />
      </div>
      <div className="space-y-1">
        <Skeleton className="h-6 w-[200px]" />
        <div className="flex items-center text-xs text-muted-foreground">
          <Skeleton className="h-4 w-4 mr-2" />
          <Skeleton className="h-4 w-[50px]" />
        </div>
      </div>
    </div>
  );
};
