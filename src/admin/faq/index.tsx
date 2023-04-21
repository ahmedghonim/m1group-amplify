import React from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

import { FAQType } from "./[id]";
import { Button } from "~/ui/atom";
import { SingleQuestion } from "~/views/public-page/faq/single-faq";
import NoDataFounded from "~/ui/organism/no-data";

function FAQPage() {
  const { t, lang } = useTranslation("common");

  const { push } = useRouter();

  // const { data = [], isLoading, refetch } = api.fqa.getAll.useQuery();
  // const { mutateAsync: deleteFAQ } = api.fqa.delete.useMutation();

  async function onDelete(id: string) {
    // await deleteFAQ({ id });
    // await refetch();
  }

  const onEdit = async (id: string, ques: FAQType) => {
    await push(`/admin/faq/${id}`);
  };

  // if (isLoading) return <>loading ... </>;

  return (
    <section>
      <div className="flex justify-end">
        <Button onClick={() => void push("/admin/faq/add")}>
          {t("add_faq")}
        </Button>
      </div>
      <div className="flex flex-col lg:px-4">
        {/* {data?.length > 0 ? (
          []?.map((question: FAQType) => {
            return (
              <SingleQuestion
                key={question.id}
                ques={lang === "ar" ? question.q_ar : question.q_en}
                answer={lang === "ar" ? question.a_ar : question.a_en}
                onDelete={() => {
                  void onDelete(question.id as string);
                }}
                onEdit={() => {
                  void onEdit(question.id as string, question);
                }}
              />
            );
          })
        ) : (
          <NoDataFounded />
        )} */}
      </div>
    </section>
  );
}

export default FAQPage;
