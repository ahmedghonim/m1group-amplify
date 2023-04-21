import { Input } from "~/ui/atom";
import TextEditor from "~/ui/atom/text-editor";
import NoDataFounded from "~/ui/organism/no-data";
import { Form, Formik } from "formik";
import useTranslation from "next-translate/useTranslation";
import React from "react";

export default function MessageForm({
  initialValues,
}: {
  initialValues: { last_name: string } | null;
}) {
  const { t } = useTranslation("common");
  const onSubmit = () => {
    console.log("test");
  };

  return (
    <div className="h-full flex-1 overflow-auto rounded-[10px] px-8 py-11">
      {initialValues !== null ? (
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues ?? {}}
          enableReinitialize
        >
          <Form>
            <>
              <div className="mb-6 grid grid-cols-2 gap-6">
                <Input
                  disabled
                  isForm
                  name="first_name"
                  label={t("first_name")}
                />
                <Input
                  disabled
                  isForm
                  name="last_name"
                  label={t("last_name")}
                />
                <Input
                  disabled
                  isForm
                  name="mail"
                  type="email"
                  label={t("mail")}
                />
                <Input
                  isForm
                  disabled
                  name="phone"
                  type="number"
                  label={t("phone_number")}
                />
                <Input disabled isForm name="subject" label={t("subject")} />
              </div>
              <TextEditor isForm name="message" label={t("message")} />
            </>
          </Form>
        </Formik>
      ) : (
        <NoDataFounded />
      )}
    </div>
  );
}
