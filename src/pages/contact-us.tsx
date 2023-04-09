import IntroSection from "@views/shared/intro-section";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import React from "react";
import ContactCover from "@image/contact-cover.png";
import { Text } from "@ui/atom";
import ContactUsForm from "@views/public-page/contact-us";

export default function ContactUsSSS() {
  const { t } = useTranslation("pages-title");

  return (
    <>
      <Head>
        <title>{t("contact-us")}</title>
      </Head>
      <IntroSection image={ContactCover}>
        <div className="w-[80%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">
          <Text
            as="h1"
            font="bold"
            className="!text-[40px] !text-primary-100 font-Lato"
          >
            {t("common:contact_us")}
          </Text>
          <Text
            as="p"
            font="semi"
            className="!text-[18px] !text-white font-Inter"
          >
            {t("common:contact_us_sub")}
          </Text>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-[1]" />
      </IntroSection>

      <div className="md:px-[124px] px-6">
        <div className="relative md:-top-[125px] -top-[40px] bg-[#F2E4BF] md:py-[132px] py-4 px-6 rounded-[12px] z-[3]">
          <ContactUsForm className="!mt-0 relative z-[5]" onSubmit={() => {}} />
        </div>
      </div>
    </>
  );
}
