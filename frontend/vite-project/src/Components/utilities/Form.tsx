import React from 'react'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const useForm = (callback: any, initialState= {}) => {
  
    const { t } = useTranslation();
    const [values, setValues] = useState(initialState);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: 
    event.target.value });

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await callback(); // triggering the callback
    };

  return (
    {onSubmit,
    onChange,
    values}
  )
}

export default useForm;