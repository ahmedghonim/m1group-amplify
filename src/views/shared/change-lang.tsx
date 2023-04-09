import clsx from "clsx";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import LangIcon from "@svg/lang.svg";

function ChangeLang() {
  const { pathname } = useRouter();
  const { lang } = useTranslation("pages-title");
  return (
    <div className="flex items-center gap-2">
      <LangIcon />
      <Link
        href={pathname}
        locale="en"
        className={clsx("text-black", {
          "text-opacity-50": lang !== "en",
        })}
      >
        {"EN"}
      </Link>
      <Link
        href={pathname}
        locale="ar"
        className={clsx("text-black", {
          "text-opacity-50": lang !== "ar",
        })}
      >
        {"AR"}
      </Link>
    </div>
  );
}

export default ChangeLang;
