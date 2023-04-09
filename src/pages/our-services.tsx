import { LinkButton, Text } from "@ui/atom";
import IntroSection from "@views/shared/intro-section";
import ServesView, { ServesViewProps } from "@views/public-page/our-serves";
import servesData from "@views/public-page/our-serves/mockdata";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import React from "react";
import ServicesCover from "@image/services-cover.png";

function OurService() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("pages-title:our-services")}</title>
      </Head>
      <IntroSection image={ServicesCover}>
        <div className="w-[80%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">
          <Text
            as="h1"
            font="bold"
            className="!text-[40px] !text-primary-100 font-Lato"
          >
            {t("our_services")}
          </Text>
          <Text
            as="p"
            font="semi"
            className="!text-[18px] !text-white font-Inter"
          >
            {t("our_services_sub")}
          </Text>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60" />
      </IntroSection>

      <div className="md:px-[120px] md:space-y-[105px] px-6 space-y-6 text-center md:mt-[120px] my-[53px]">
        {servesData.map(
          (
            { src, desc_ar, desc_en, title_ar, title_en }: ServesViewProps,
            index
          ) => (
            <ServesView
              src={src}
              desc_ar={desc_ar}
              desc_en={desc_en}
              title_ar={title_ar}
              title_en={title_en}
              revers={index % 2 !== 0}
            />
          )
        )}
        <div className="rounded-3xl bg-[#F2E4BF] h-[282px] flex flex-col justify-center items-center gap-7 px-2">
          <Text as="p" size="md" className="text-black md:w-3/5 ">
            {t("ourServiceDesc")}
          </Text>
          <LinkButton href="/contact-us" rounded="full">
            {t("contact")}
          </LinkButton>
        </div>
      </div>
    </>
  );
}

export default OurService;
