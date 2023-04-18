import AboutUS from "@views/public-page/home/about-us";
import Clients from "@views/public-page/home/clients";
import HomeIntro from "@views/public-page/home/intro-section";
import Statistics from "@views/public-page/home/statistics";
import WhyUs from "@views/public-page/home/why-us";
import servesData from "@views/public-page/our-serves/mockdata";
import Services from "@views/public-page/services";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Link from "next/link";

export default function IndexPage() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("pages-title:home")}</title>
      </Head>
      <div>
        <section className="w-full">
          <HomeIntro />
          <Statistics />
          <AboutUS />
          <WhyUs />
          <Services
            className="bg-[#F2E4BF] md:pt-[70px] pt-10 md:pb-[108px] pb-10 px-6 rounded-[12px]"
            data={servesData as any}
          >
            <div className="flex justify-end">
              <Link
                href="/our-services"
                className="bg-dark-100 !text-[16px] py-3 px-5 text-white hover:opacity-60 duration-200 rounded font-Lato font-bold mt-6"
              >
                {t("view_all")}
              </Link>
            </div>
          </Services>
          <Clients />
        </section>
      </div>
    </>
  );
}
