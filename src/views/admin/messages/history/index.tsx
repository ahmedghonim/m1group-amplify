import useTranslation from "next-translate/useTranslation";
import React, { useMemo } from "react";
import { MessageType } from "~/pages/admin/messages";
import NoDataFounded from "~/ui/organism/no-data";

export interface SingleMessageType extends MessageType {
  onClick?: () => void;
}

const backgroundColors = [
  "#C101C5",
  "#F58500",
  "#03B415",
  "#1300F1",
  "#FFD600",
  "#00F8F8",
  "#2874A6",
  "#1B2631",
  "#A93226",
  "#A569BD",
  "#58D68D",
];

// single message component
const SingleMessage = ({
  first_name: firstName = "",
  last_name: lastName = "",
  time,
  subject,
  active,
  onClick,
}: SingleMessageType) => {
  // get random background color
  const bgChanger = useMemo(
    () => backgroundColors[Math.floor(Math.random() * backgroundColors.length)],
    []
  );

  return (
    <button
      className="mb-3 flex w-full items-center justify-between"
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <div
          className="relative grid h-[44px] w-[44px] place-items-center rounded-full"
          style={{ backgroundColor: bgChanger }}
        >
          <span className="text-sm font-bold">
            {/* {firstName[0].toUpperCase() + lastName[0].toUpperCase() ?? ""} */}
          </span>
          {active && (
            <span className="absolute right-0 top-0 h-[12px] w-[12px] rounded-full bg-primary-100"></span>
          )}
        </div>
        <div className="flex flex-col">
          <span className="!font-Noto !text-sm font-bold">
            {`${firstName} ${lastName}`}
          </span>
          <span className="!font-Noto !text-xs">{subject}</span>
        </div>
      </div>
      <span className="!font-Noto !text-[8px]">{time}</span>
    </button>
  );
};

interface Props {
  messages: SingleMessageType[];
  setMmessageData: React.Dispatch<React.SetStateAction<MessageType | null>>;
}

export default function MessagesHistory({ messages, setMmessageData }: Props) {
  const { t } = useTranslation("common");

  return (
    <div className="h-full w-[28%] overflow-auto rounded-[10px]  p-4">
      <h1 className="font-Noto mb-5 font-bold">{t("your_mails")}</h1>
      {messages.length > 0 ? (
        messages.map((message) => {
          return (
            <SingleMessage
              key={message.time}
              {...message}
              onClick={() => setMmessageData(message)}
            />
          );
        })
      ) : (
        <NoDataFounded />
      )}
    </div>
  );
}
