import "@styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import LayoutProvider from "providers/layout-provider";
import { useEffect } from "react";

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
