import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React from "react";

function AdminHeader() {
  const { t } = useTranslation("pages-title");
  const { asPath } = useRouter();
  const currentPath = asPath.split("/").reverse()[0];
  return <h1 className="text-[28px] font-bold">{t(currentPath)}</h1>;
}

export default AdminHeader;
