import React from "react";

import useTranslation from "next-translate/useTranslation";
import { ServicesCard, ServicesCardProps } from "~/views/public-page/services";
import ModalConfirm from "~/ui/organism/modal-confirm";
import { LinkButton } from "~/ui/atom";
import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import * as mutations from "~/graphql/mutations";
import { ListOurServicesQuery } from "~/API";
import { listOurServices } from "~/graphql/queries";
function Page({ data }: { data: ListOurServicesQuery["listOurServices"] }) {
  const { t } = useTranslation("common");
  console.log("data >>>> ", data);
  async function deleteAction(id: string) {}

  return (
    <div className="">
      <div className="flex justify-end mb-10">
        <LinkButton href="/admin/our-services/add" style="primary">
          {t("add")}
        </LinkButton>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-14">
        {data?.items &&
          data?.items.map((service, index) => (
            <div
              key={service?.id}
              className="relative bg-white p-4 shadow-lg rounded-lg"
            >
              <ServicesCard key={index} {...(service as ServicesCardProps)} />
              <div className="mt-5 flex gap-4 justify-end">
                <ModalConfirm
                  style="!text-red-500 font-semibold !py-1"
                  onClick={() => {
                    void deleteAction(service?.id as string);
                  }}
                  label={t("delete")}
                />
                <LinkButton href={`/admin/our-services/${service?.id}`}>
                  {t("edit")}
                </LinkButton>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Page;
export async function getServerSideProps() {
  try {
    const data = await API.graphql<GraphQLQuery<ListOurServicesQuery>>({
      query: listOurServices,
    }).then((res) => res.data);
    return {
      props: { data: data?.listOurServices }, // will be passed to the page component as props
    };
  } catch (error) {}
}
