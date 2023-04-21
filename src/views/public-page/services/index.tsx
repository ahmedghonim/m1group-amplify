import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import clsx from "clsx";
import { Text } from "~/ui/atom";
import { Storage } from "aws-amplify";
import { useState } from "react";

export interface ServicesCardProps {
  image: string;
  title_ar: string;
  title_en: string;
}

export const ServicesCard = ({
  image,
  title_ar,
  title_en,
}: ServicesCardProps) => {
  const { lang } = useTranslation();
  const [src, setSrc] = useState<string>("");
  Storage.get(image).then((res) => setSrc(res));
  return (
    <div className="relative h-[400px] overflow-hidden">
      <Image
        src={src ?? image}
        width={1000}
        height={1000}
        alt="image"
        className="h-full w-full"
      />
      <div className="name absolute  bottom-0 left-0 w-full bg-primary-100 bg-opacity-60 py-3 duration-300">
        <Text
          font="bold"
          as="h3"
          className="font-Lato !text-[28px] !text-white"
        >
          {lang === "ar" ? title_ar : title_en}
        </Text>
      </div>
    </div>
  );
};

interface ServicesProps {
  data: ServicesCardProps[];
  children: React.ReactNode;
  headStyle?: string;
  className?: string;
}

export default function Services({
  data,
  className,
  headStyle,
  children,
}: ServicesProps) {
  const { t } = useTranslation("common");

  return (
    <div className="pt-[40px] md:pt-[124px]">
      <Text
        as="h2"
        font="bold"
        className={clsx("!mb-10 !text-3xl lg:!text-[48px]", headStyle)}
      >
        {t("our_services")}
      </Text>

      {/* -------- our services ------- */}
      <div className={clsx("lg:px-[120px]", className)}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-14">
          {data.slice(0, 6).map((service, index) => (
            <ServicesCard key={index} {...service} />
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}
