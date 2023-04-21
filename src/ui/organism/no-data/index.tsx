import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Text } from "~/ui/atom"

interface Props {
  className?: string
}
const NoDataFounded = ({ className = '' }: Props) => {
  const { t } = useTranslation('common')

  return (
    <div
      className={`grid place-items-center w-full h-full text-center items-center gap-5 ${className}`}
    >
      <div className="flex flex-col items-center">
        <Text as="h1" className="!font-bold !text-xl">
          {t("it's_empty")}
        </Text>
        <Text as="p" className="!text-md">
          {t('empty_message')}
        </Text>
      </div>
    </div>
  )
}
export default NoDataFounded
