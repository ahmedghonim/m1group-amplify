import { useRouter } from "next/router";
import * as yup from "yup";
import CommonForm from "~/views/admin/common-from";
import useTranslation from "next-translate/useTranslation";
import { toast } from "react-toastify";

const validationSchema = yup.object({
  q_ar: yup.string().required("required"),
  q_en: yup.string().required("required"),
  a_ar: yup.string().required("required"),
  a_en: yup.string().required("required"),
});

export interface FAQType extends yup.InferType<typeof validationSchema> {
  id?: string;
}

export default function FAQForm() {
  const { query, push } = useRouter();
  const { t } = useTranslation("common");

  // const { mutate, isLoading } = api.fqa.create.useMutation();
  // const { mutate: mutateUpdate, isLoading: isLoadingUpdate } =
  //   api.fqa.update.useMutation();

  // const { data } = query.id
  //   ? api.fqa.getById.useQuery(query.id as string)
  //   : { data: {} };

  const onSubmit = (values: FAQType) => {
    try {
      if (query.id !== "add") {
        // mutateUpdate({ id: query.id as string, ...values });
      } else {
        // mutate(values);
      }

      toast.success(`${t("operation-success")}`);
      void push("/admin/faq");
    } catch (error) {
      console.log("error >>>> ", error);
    }
  };

  const initialValues: FAQType = {
    q_ar: "",
    q_en: "",
    a_ar: "",
    a_en: "",
  };

  return (
    <CommonForm
      onSubmit={onSubmit}
      initialValues={{ ...initialValues }}
      validationSchema={validationSchema}
      isLoading={false}
      mainTitle={t("faq_ques")}
      mainTitle2={t("faq_ans")}
      isNoImage
    />
  );
}
