import React from "react";
import TextLogo from "~/assets/svg/text-logo.svg";
import LogoutIcon from "~/assets/svg/logout.svg";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import ChangeLang from "./change-lang";
import { signOut } from "next-auth/react";
import { Auth } from "aws-amplify";

type Props = {
  navBar: {
    link: string;
    name: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
  }[];
  setOpenMenu?: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
};

function VerticalBar({ setOpenMenu, navBar, className }: Props) {
  const { asPath, push } = useRouter();
  const { t } = useTranslation("pages-title");

  const isActiveTab = (_link: string) => asPath === _link;
  async function logOut() {
    await Auth.signOut();
    localStorage.setItem("user", "null");
    push("/login");
  }

  return (
    <div
      className={clsx(
        "fixed left-0 top-0 h-screen w-full bg-[#FDFAE7]",
        className
      )}
    >
      <div className="mt-14 flex justify-center">
        <TextLogo />
      </div>
      <div className="mx-9 mt-14 flex flex-col gap-6">
        {navBar.map(({ link, name, icon: Icon }) => (
          <Link key={link} href={link}>
            <span
              onClick={() => {
                setOpenMenu?.(false);
              }}
              className={clsx(
                "flex h-fit items-center gap-2 text-lg text-[#A7A7A7]",
                {
                  "!text-primary-100": isActiveTab(link),
                }
              )}
            >
              <Icon className="fill-current" />
              {t(name)}
            </span>
          </Link>
        ))}
      </div>
      <div className="mx-9 mt-8">
        <div className="mb-3">
          <ChangeLang />
        </div>
        <div>
          <button onClick={logOut}>
            <span className="flex h-fit items-center gap-2 text-lg text-[#A7A7A7]">
              {/* log out svg */}
              <LogoutIcon />
              Log out
            </span>
          </button>
        </div>
      </div>
      {/* log out */}
    </div>
  );
}
export default VerticalBar;
