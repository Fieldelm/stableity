import {useEffect, useState} from 'react';
import { statusPostFetch as postFetch } from '../utilities/Fetches';

//https://www.carlrippon.com/fetch-with-async-await-and-typescript/

//https://dev.to/karan316/build-forms-using-react-the-easy-way-with-typescript-46bh

import { useTranslation } from 'react-i18next';
import useForm from '../utilities/Form';


const Register = () => {
  const { t } = useTranslation();

  const [errorMsg, setErrorMsg] = useState('');
  
  const [status, setStatus] =  useState(0);

  useEffect(()=>{
    switch(status){
      case 0:
        setErrorMsg('');
        break;
      case 200:
        setErrorMsg('Registered');
        break;
      case 409:
        setErrorMsg('Email already registered');
        break;
      default:
        setErrorMsg(`${status}`)
    }
  }, [status])

    const initialState : User = {
      email: "",
      password: "",
  };


  const registerUserCallback =  async () => {
  
    const newUser : User = values as User

    console.log(newUser);

    const response = await postFetch('/register', newUser);

    console.log(await response);

    setStatus(await response);

    // setStatus(await response.status);  
    

    //postFetch('/register', newUser).then(response => setStatus(response.status) );
    }

  // getting the event handlers from our custom hook
  const { onChange, onSubmit, values} = useForm(
    registerUserCallback,
    initialState
  );

  let passwdPlaceholder: string = t("password");

  return (
    <div>
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
      <div className='error_message'>
        {(errorMsg !== '') ? <p>{errorMsg}</p> : <></>}
      </div>

    </form>
    </div>
    // <div>
    //   {await registerUserCallback()}
    // </div>
  
  )
}

export default Register;