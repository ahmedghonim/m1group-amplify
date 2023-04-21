import { useRouter } from "next/router";
import * as yup from "yup";
import useTranslation from "next-translate/useTranslation";
import { toast } from "react-toastify";
import CommonForm from "~/views/admin/common-from";
import { v4 as uuidv4 } from "uuid";
import { API, Storage } from "aws-amplify";
import { createOurService } from "~/graphql/mutations";
import { GraphQLQuery } from "@aws-amplify/api";
import { CreateOurServiceInput, CreateOurServiceMutation } from "~/API";

const validationSchema = yup.object({
  image: yup.string().required("required"),
  title_ar: yup.string().required("required"),
  title_en: yup.string().required("required"),
  desc_ar: yup.string().required("required"),
  desc_en: yup.string().required("required"),
});

export type FormData = yup.InferType<typeof validationSchema>;

export default function OurServicesForm() {
  const { query, push } = useRouter();
  const { t } = useTranslation("common");

  const onSubmit = async (values: FormData) => {
    console.log("values >>>> ", values);
    const { image, ...input }: { image: any } = values;
    try {
      const imagePath = (await uuidv4()) + "." + image?.type.split("/")[1];
      await Storage.put(imagePath, image);
      await API.graphql<GraphQLQuery<CreateOurServiceMutation>>({
        query: createOurService,
        authMode: "AMAZON_COGNITO_USER_POOLS",
        variables: { input: { ...input, image: imagePath } },
      });

      toast.success(`${t("operation-success")}`);
      void push("/admin/our-services");
    } catch (error) {
      console.log("error >>>> ", error);
    }
  };

  const initialValues: CreateOurServiceInput = {
    image: "",
    title_ar: "",
    title_en: "",
    desc_ar: "",
    desc_en: "",
  };

  return (
    <CommonForm
      onSubmit={onSubmit}
      initialValues={{ ...initialValues }}
      validationSchema={validationSchema}
      isLoading={false}
    />
  );
}
