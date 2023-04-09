import { Text } from "@ui/atom";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import Logo from "@svg/larg-text-logo.svg";
import MobileLogo from "@svg/mob-large-text-logo.svg";
import Link from "next/link";
import useScreen from "@hooks/useScreen";

export default function AboutUS() {
  const { t } = useTranslation("common");

  const currentView = useScreen();

  return (
    <div className="px-6 lg:px-[120px] pt-[41px] md:pt-[68px]">
      <Text
        as="h1"
        font="bold"
        className="!text-start !text-2xl md:!text-[40px] !text-primary-100 font-Lato mb-4"
      >
        {t("about_us")}
      </Text>
      <div className="flex justify-between items-center flex-col lg:flex-row  gap-5 md:gap-0">
        <div className="lg:w-[60%] order-2 lg:order-1">
          <div className="mb-3 flex flex-col gap-2">
            <Text
              as="p"
              className="!text-start leading-8 font-Lato !text-[16px] md:text-[21px]"
            >
              - {t("about_us_1")}
            </Text>
            <Text
              as="p"
              className="!text-start leading-8 font-Lato !text-[16px] md:text-[21px]"
            >
              - {t("about_us_2")}
            </Text>
            <Text
              as="p"
              className="!text-start leading-8 font-Lato !text-[16px] md:text-[21px]"
            >
              - {t("about_us_3")}
            </Text>
            <Text
              as="p"
              className="!text-start leading-8 font-Lato !text-[16px] md:text-[21px]"
            >
              - {t("about_us_4")}
            </Text>
          </div>
          <Link
            href="/about-us"
            className="bg-dark-100 !text-[16px] py-3 px-5 rounded text-white hover:opacity-60 duration-200"
          >
            {t("read_more")}
          </Link>
        </div>

        <div className="w-full lg:w-fit order-1 lg:order-2 flex justify-center">
          {currentView === "phone" ? <MobileLogo /> : <Logo />}
        </div>
      </div>
    </div>
  );
}
