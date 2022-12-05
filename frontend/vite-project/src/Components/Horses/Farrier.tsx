import React from 'react'
import { useTranslation } from 'react-i18next';

const Farrier = () => {
  const { t } = useTranslation();

  return (
    <div>{t('Farrier')}</div>
  )
}

export default Farrier