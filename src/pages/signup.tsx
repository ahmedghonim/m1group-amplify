import { Form, Formik } from "formik";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import * as yup from "yup";
import { Button, Input } from "~/ui/atom";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const validationSchema = yup.object({
  username: yup.string().required("required"),
  password: yup.string().required("required"),
  email: yup.string().email().required("required"),
});

export type FormData = yup.InferType<typeof validationSchema>;
const initialValues: FormData = {
  username: "",
  password: "",
  email: "",
};
function Page() {
  const { t } = useTranslation("common");
  const { push } = useRouter();
  async function onSubmit(values: FormData) {
    const { username, password, email } = values;
    await Auth.signUp({
      username,
      password,
      attributes: {
        email,
      },
    });
    toast.success(`${t("operation-success")}`);
    push("/login");
  }

  return (
    <div className="flex h-screen bg-[#F0F0F0]">
      <div className="m-auto w-2/6 ">
        <h1 className="mb-16 text-[64px] text-primary-100">{t("singup")}</h1>
        <Formik onSubmit={onSubmit} initialValues={initialValues}>
          <Form className="flex flex-col gap-5">
            <Input isForm name="username" />
            <Input isForm name="email" type="email" />
            <Input isForm name="password" type="password" />
            <Button type="submit">{t("singup")}</Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Page;
