import AdminHeader from "./header";
import SideBar from "./side-bar";
import { Auth } from "aws-amplify";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useUser } from "~/context/AuthContext";
import { useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { push } = useRouter();
  const { user } = useUser();
  const { t } = useTranslation("common");
  useEffect(() => {
    if (user === null) {
      push("/login");
    } else {
      toast.success(
        t("welcome_to_m1_group", {
          toastId: "welcome_to_m1_group",
        }) as string
      );
    }
  }, [user]);
  if (user === null) {
    return null;
  }
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
