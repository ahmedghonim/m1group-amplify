import React from "react";
import AddressIcon from "@svg/address.svg";
import useTranslation from "next-translate/useTranslation";

function Address({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation("common");
  return (
    <div className="flex gap-1">
      <span>
        <AddressIcon className="scale-75" />
      </span>
      <div className="flex flex-col">
        {children}
        <address>
          <span className="text-white lg:text-[20px] sm:text-[12px] text-[18px] font-bold">
            - {t("address_eg")}
            <br />- {t("address_du")}
          </span>
        </address>
      </div>
    </div>
  );
}

export default Address;
