import React from 'react'
import { useTranslation } from 'react-i18next';

const Stable = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('Stable')}
    </div>
  )
}

export default Stable