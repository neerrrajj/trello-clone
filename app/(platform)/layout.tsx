import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <Toaster richColors theme="light" />
      {children}
    </ClerkProvider>
  );
};

export default PlatformLayout;
