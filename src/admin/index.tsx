import CommonForm from "~/views/admin/common-from";
import useTranslation from "next-translate/useTranslation";
import { toast } from "react-toastify";
import * as yup from "yup";
import { API } from "aws-amplify";
import * as queries from "../../graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import * as mutations from "~/graphql/mutations";

import {
  CreateAboutUsInput,
  CreateAboutUsMutation,
  CreateOurServiceMutation,
} from "~/API";
import { ListAboutusesQuery } from "../../API";

const validationSchema = yup.object({
  desc_ar: yup.string().required("required"),
  desc_en: yup.string().required("required"),
});

export type FormData = yup.InferType<typeof validationSchema>;

export default function Page({ data }: { data: ListAboutusesQuery }) {
  // Simple query
  const { listAboutuses } = data;

  const { t } = useTranslation("common");

  // const { mutate, isLoading } = api.aboutUs.update.useMutation();
  const onSubmit = async (values: CreateAboutUsInput) => {
    const { desc_ar, desc_en } = values;
    try {
      const aboutusDetails = {
        id: "1",
        ...values,
      };
      await API.graphql<GraphQLQuery<CreateAboutUsMutation>>({
        query: mutations.createAboutUs,
        authMode: "AMAZON_COGNITO_USER_POOLS",
        variables: {
          input: { desc_ar, desc_en },
        },
      });
      toast.success(`${t("operation-success")}`);
    } catch (error) {
      console.log("error >>>> ", error);
    }
  };

  const initialValues: CreateAboutUsInput = {
    desc_ar: "",
    desc_en: "",
  };
  console.log("listAboutuses?.items[0] >>>> ", listAboutuses?.items[0]);
  return (
    <div>
      <CommonForm
        isNoTitle={true}
        isNoImage={true}
        onSubmit={onSubmit}
        initialValues={{ ...initialValues, ...listAboutuses?.items[0] }}
        validationSchema={validationSchema}
        isLoading={false}
      />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const data = await API.graphql<GraphQLQuery<ListAboutusesQuery>>({
      query: queries.listAboutuses,
    }).then((res) => res.data);
    console.log("data >>>> ", data);
    return {
      props: { data }, // will be passed to the page component as props
    };
  } catch (error) {}
}
