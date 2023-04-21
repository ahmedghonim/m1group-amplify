import { Button, Input } from "~/ui/atom";
import TextEditor from "~/ui/atom/text-editor";
import UploadImage from "~/ui/atom/upload-image";
import { Form, Formik } from "formik";
import useTranslation from "next-translate/useTranslation";
import * as yup from "yup";

const validationSchema = yup.object({
  image: yup.string().required("asdasd"),
  en_text: yup.string().required("a7a").min(10),
  ar_text: yup.string().required("a7a").min(10),
});

export type FormData = yup.InferType<typeof validationSchema>;

export default function AboutForm() {
  const { t } = useTranslation("common");
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const initialValues: FormData = {
    image: "",
    ar_text: "",
    en_text: "",
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Form className="flex gap-3">
        <div className="h-[250px] w-[180px]">
          <UploadImage name="image" />
        </div>
        <div className="flex-1 flex-col flex gap-4">
          <Input name="ar_text" label={t("text-lang-ar")} />
          <TextEditor name="ar_text" label={t("text-lang-ar")} />
          <TextEditor name="en_text" label={t("text-lang-en")} />
          <div className="flex-1 flex justify-end">
            <Button style="primary" type="submit">
              {t("submit")}
            </Button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
