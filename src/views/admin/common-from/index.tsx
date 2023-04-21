/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TextEditor from "~/ui/atom/text-editor";
import { Button, Input, Text } from "~/ui/atom";
import { Form, Formik } from "formik";
import useTranslation from "next-translate/useTranslation";
import UploadImage from "~/ui/atom/upload-image";
interface Props {
  onSubmit: (values: any) => void;
  initialValues: any;
  validationSchema: any;
  isLoading: boolean;
  isNoTitle?: boolean;
  isNoDesc?: boolean;
  isNoImage?: boolean;
  mainTitle?: string;
  mainTitle2?: string;
}

function CommonForm({
  onSubmit,
  initialValues,
  validationSchema,
  isLoading,
  isNoTitle = false,
  isNoDesc = false,
  isNoImage = false,
  mainTitle,
  mainTitle2,
}: Props) {
  const { t } = useTranslation("common");
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize
    >
      <Form className="flex gap-3">
        {!isNoImage && (
          <div className="h-[250px] w-[180px]">
            <UploadImage name="image" />
          </div>
        )}
        <div className="flex flex-1 flex-col gap-4">
          {!isNoTitle && (
            <>
              {mainTitle !== "" && (
                <Text as="h1" font="bold" className="!text-base !text-start">
                  {t(mainTitle as string)}
                </Text>
              )}
              <Input isForm name="title_ar" label={t("text-lang-ar")} />
              <Input isForm name="title_en" label={t("text-lang-en")} />
            </>
          )}
          {!isNoDesc && (
            <>
              {mainTitle2 !== "" && (
                <Text as="h1" font="bold" className="!text-base !text-start">
                  {t(mainTitle2 as string)}
                </Text>
              )}
              <TextEditor isForm name="desc_en" label={t("text-lang-en")} />
              <TextEditor isForm name="desc_ar" label={t("text-lang-ar")} />
            </>
          )}
          <div className="flex flex-1 justify-end">
            <Button style="primary" type="submit">
              {t("submit")}
            </Button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default CommonForm;
