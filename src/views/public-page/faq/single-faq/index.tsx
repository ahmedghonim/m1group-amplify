import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import Plus from "~/assets/svg/plus.svg";
import Delete from "~/assets/svg/delete.svg";
import Edit from "~/assets/svg/edit.svg";
import clsx from "clsx";
import { Text } from "~/ui/atom";

interface SingleQuestionProps {
  ques: string;
  answer: string;
  number?: number;
  onDelete?: () => void;
  onEdit?: () => void;
}

export const SingleQuestion = ({
  ques,
  answer,
  onDelete,
  onEdit,
}: SingleQuestionProps) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const withActions = onDelete || onEdit !== undefined;

  return (
    <div
      className={`collapse py-3 md:py-5 ${
        clicked
          ? "border-b-[2px] border-primary-100"
          : "border-b-[1px] border-[#C2BBFF]"
      }`}
      onClick={() => setClicked(!clicked)}
    >
      <input type="checkbox" />
      <div className="collapse-title relative flex items-center">
        <Text font="mid" className="font-Inter  !text-[16px] md:!text-[24px]">
          {ques}
        </Text>

        {withActions && (
          <div className="flex items-center gap-4">
            <button onClick={onEdit}>
              <Edit />
            </button>
            <button onClick={onDelete}>
              <Delete />
            </button>
          </div>
        )}

        <span
          className={clsx("absolute right-2 top-1/2 duration-300 ", {
            "-translate-y-1/2 rotate-[135deg]": clicked,
            "-translate-y-1/2": !clicked,
          })}
        >
          <Plus className="scale-[1.2] fill-black" />
        </span>
      </div>
      <div className="collapse-content">
        <Text as="p" className=" pb-2 leading-8 !text-start md:pb-10">
          {answer}
        </Text>
      </div>
    </div>
  );
};

function FAQS({ questions }: { questions: SingleQuestionProps[] }) {
  const { t } = useTranslation("common");
  return (
    <div className="my-14 px-6 md:px-[120px]">
      <Text
        as="h2"
        font="semi"
        className="mb-4 font-Inter !text-3xl !text-primary-100 md:!leading-[65px] lg:!text-[48px]"
      >
        {t("frequently_head")}
      </Text>
      <div className="mx-auto flex flex-col lg:px-4">
        {questions.map((question, index) => {
          return (
            <SingleQuestion
              key={question.ques}
              {...question}
              number={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FAQS;
