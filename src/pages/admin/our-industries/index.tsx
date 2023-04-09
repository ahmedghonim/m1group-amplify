import Modal from "@ui/atom/modal/index.tsx";
import OurIndustryForm from "@views/admin/our-industries/form";
import useTranslation from "next-translate/useTranslation";

export default function IndexPage({}: {}) {
  const { t } = useTranslation("common");
  return (
    <div>
      <div className="flex justify-end w-full">
        <Modal
          label={`${t("add")} ${t("our-industries")}`}
          children={<OurIndustryForm />}
        />
      </div>
    </div>
  );
}
