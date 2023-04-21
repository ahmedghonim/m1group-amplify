import { Form, Formik } from "formik";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import * as yup from "yup";
import { Button, Input } from "@ui/atom";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";

const validationSchema = yup.object({
  username: yup.string().required("required"),
  password: yup.string().required("required"),
});

export type FormData = yup.InferType<typeof validationSchema>;
const initialValues: FormData = {
  username: "",
  password: "",
};
function Page() {
  const { push } = useRouter();
  const { t } = useTranslation("common");

  async function onSubmit(values: FormData) {
    const { username, password } = values;
    try {
      await Auth.signIn(username, password);
      push("/admin");
    } catch (error) {
      console.error("error signing in", error);
    }
  }
  return (
    <div className="flex h-screen bg-[#F0F0F0]">
      <div className="m-auto w-2/6 ">
        <h1 className="mb-16 text-[64px] text-primary-100">{t("login")}</h1>
        <Formik onSubmit={onSubmit} initialValues={initialValues}>
          <Form className="flex flex-col gap-5">
            <Input isForm name="username" />
            <Input isForm name="password" type="password" />
            <Button type="submit">{t("login")}</Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Page;
