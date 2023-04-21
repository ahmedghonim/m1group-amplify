import { Button } from "~/ui/atom";
import Modal from "~/ui/atom/modal/index.tsx";
import useTranslation from "next-translate/useTranslation";
import React from "react";

type Props = {
  label: string;
  style?: string;
  onClick: () => void;
};

export default function ModalConfirm({ label, style, onClick }: Props) {
  const { t } = useTranslation("common");
  return (
    <Modal style={style} label={label}>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{t("are_you_sure")}</h1>
        <p className="text-gray-500">{t("delete_content")}</p>
        <div className="flex justify-end gap-4">
          <Button style="primary">{t("no")}</Button>
          <Button style="danger" onClick={onClick}>
            {t("yes")}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
