import { Text } from "~/ui/atom";
import clsx from "clsx";
import useTranslation from "next-translate/useTranslation";
import React from "react";

export default function Statistics() {
  const { t } = useTranslation("common");

  const numbers = [
    {
      count: "40+",
      name: t("services"),
    },
    {
      count: "100%",
      name: t("usefully"),
    },

    {
      count: "4K+",
      name: t("client"),
    },
  ];

  return (
    <div className="flex justify-between items-center md:w-[40%] mx-auto mt-[35px] px-6">
      {numbers.map(({ name, count }, index) => (
        <div
          key={name}
          className={clsx("text-center", {
            "border-l border-r  border-[#EAECF0] px-6": index === 1,
            "md:px-6": index !== 1,
          })}
        >
          <Text
            as="h2"
            font="semi"
            className="!text-primary-100 !text-2xl md:!text-6xl"
          >
            {count}
          </Text>
          <Text className="!text-sm md:!text-lg">{name}</Text>
        </div>
      ))}
    </div>
  );
}
