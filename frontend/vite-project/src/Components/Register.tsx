import React from 'react';

import { useTranslation } from 'react-i18next';


const Register = () => {
  const { t } = useTranslation();

  return (
    <div>{t('Register')}</div>
  )
}

export default Register;