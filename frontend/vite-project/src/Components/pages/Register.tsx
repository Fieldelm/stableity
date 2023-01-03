import React from 'react';

//https://www.carlrippon.com/fetch-with-async-await-and-typescript/

//https://dev.to/karan316/build-forms-using-react-the-easy-way-with-typescript-46bh
8
import { useTranslation } from 'react-i18next';
import useForm from '../utilities/Form';


const Register = () => {
  const { t } = useTranslation();


    const initialState : User = {
      email: "",
      password: "",
  };


  const registerUserCallback = () => {
  
    const newUser : User = values as User

    console.log(newUser);

    }


  // getting the event handlers from our custom hook
  const { onChange, onSubmit, values} = useForm(
    registerUserCallback,
    initialState
  );

  let passwdPlaceholder: string = t("password");

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