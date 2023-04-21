import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";
import LayoutProvider from "~/providers/layout-provider";
Amplify.configure({ ...awsconfig, ssr: true });

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const dir = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return (
    <LayoutProvider>
      <Component {...pageProps} />
    </LayoutProvider>
  );
}
