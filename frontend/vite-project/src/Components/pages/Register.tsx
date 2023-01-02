import React from 'react';


import { useTranslation } from 'react-i18next';
import useForm from '../utilities/Form';


const Register = () => {
  const { t } = useTranslation();

  const initialState = {
    email: "",
    password: "",
};


const registerUserCallback = async () => {
  
}

// getting the event handlers from our custom hook
const { onChange, onSubmit, values } = useForm(
  registerUserCallback,
  initialState
);

let passwdPlaceholder : string = t("password");

  return (
    <form onSubmit={onSubmit}>
        <div>
            <input
                name='email'
                id='email'
                type='email'
                placeholder='Email'
                onChange={onChange}
                required
                />

            <input
                name='password'
                id='password'
                type='password'
                placeholder={passwdPlaceholder}
                onChange={onChange}
                required
                />
            <button type='submit'>{t('Register')}</button>
        </div>
        </form>
  )
}

export default Register;