import AdminHeader from "./header";
import SideBar from "./side-bar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row gap-8">
      <SideBar />
      <main className=" flex flex-col gap-6 py-12 pe-9 overflow-y-auto">
        <AdminHeader />
        {children}
      </main>
    </div>
  );
}
