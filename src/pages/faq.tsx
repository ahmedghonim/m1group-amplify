import FAQIntro from "~/views/public-page/faq/intro-sec";
import FAQS from "~/views/public-page/faq/single-faq";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import React from "react";

export default function FAQ() {
  const { t } = useTranslation("common");

  const questions = [
    {
      ques: t("ques_1"),
      answer: t("answer_1"),
    },
    {
      ques: t("ques_2"),
      answer: t("answer_2"),
    },
    {
      ques: t("ques_3"),
      answer: t("answer_3"),
    },
  ];

  return (
    <>
      <Head>
        <title>{t("pages-title:faq")}</title>
      </Head>
      <FAQIntro />
      <FAQS questions={questions} />
    </>
  );
}
