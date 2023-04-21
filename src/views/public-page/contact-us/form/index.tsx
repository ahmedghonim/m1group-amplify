import React from "react";
import useTranslation from "next-translate/useTranslation";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, Input } from "~/ui/atom";

interface ContactInputProps {
  placeHolder: string;
  name: string;
  label: string;
  type?: string;
}

// single input component
const ContactInput = ({
  placeHolder,
  name,
  label,
  type = "",
}: ContactInputProps) => {
  return (
    <div className="w-full bg-light-300 !rounded-[4px]">
      <Input
        name={name}
        placeholder={placeHolder}
        type={type}
        isForm
        label={label}
        className="!text-primary-100"
      />
    </div>
  );
};

function ContactForm({ onSubmit }: { onSubmit: () => void }) {
  const { t } = useTranslation("common");
  const initialValues = {
    first_name: "",
    last_name: "",
    mail: "",
    phone: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required(t("Required")),
    last_name: Yup.string().required(t("Required")),
    mail: Yup.string().required(t("Required")),
    phone: Yup.string().required(t("Required")),
    subject: Yup.string().required(t("Required")),
    message: Yup.string().max(300).required(t("Required")),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="flex flex-col lg:gap-6 gap-6 sm:gap-3 lg:ltr:pr-[51px] sm:ltr:pr-[15px] lg:rtl:pl-[51px] sm:rtl:pl-[15px]">
        <div className="grid md:grid-cols-2 md:gap-8 gap-4">
          <ContactInput
            name="first_name"
            placeHolder={t("first_name")}
            label={t("first_name")}
          />
          <ContactInput
            name="last_name"
            placeHolder={t("last_name")}
            label={t("last_name")}
          />
          <ContactInput
            name="mail"
            placeHolder={t("email")}
            type="email"
            label={t("email")}
          />
          <ContactInput
            name="phone"
            placeHolder={t("phone_number")}
            label={t("phone_number")}
          />
          <ContactInput
            name="subject"
            placeHolder={t("subject")}
            label={t("subject")}
          />
        </div>
        <div className="bg-light-300 !rounded-[4px]">
          <ContactInput
            name="message"
            placeHolder={t("message")}
            label={t("message")}
          />
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            style="secondary"
            className="sm:!w-fit w-full ml-auto py-[15px] !px-[48px] !rounded !text-[16px] "
            font="mid"
          >
            {t("send_message")}
          </Button>
        </div>
      </Form>
    </Formik>
  );
}
export default ContactForm;
