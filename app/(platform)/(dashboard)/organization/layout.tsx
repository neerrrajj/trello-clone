import { Sidebar } from "../_components/sidebar";

const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="pt-[4.5rem] px-4 mx-auto">
      <div className="flex gap-x-7">
        <div className="w-56 xl:w-64 shrink-0 hidden md:block">
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  );
};

export default OrganizationLayout;
