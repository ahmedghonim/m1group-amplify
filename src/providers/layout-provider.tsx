import DashboardLayout from "~/views/admin/layout";
import PublicLayout from "~/views/public-page/layout";
import { useRouter } from "next/router";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "~/context/AuthContext";
interface Props {
  children: React.ReactNode;
}

const Toast = () => (
  <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={true}
    limit={1}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
);

function LayoutProvider({ children }: Props): JSX.Element {
  const { asPath } = useRouter();
  const pattern = /\blogin\b/;

  if (pattern.test(asPath)) return children as JSX.Element;

  return applyLayoutFor(asPath) ? (
    <AuthContext>
      <DashboardLayout>
        {children}
        <Toast />
      </DashboardLayout>
    </AuthContext>
  ) : (
    <PublicLayout>
      {children}
      <Toast />
    </PublicLayout>
  );
}

export default LayoutProvider;

export const applyLayoutFor = (url: string) => {
  return [/^(\/(ar|en))?\/(admin)(\/?).*?/].some((fullPageRegex) =>
    fullPageRegex.test(url)
  );
};
