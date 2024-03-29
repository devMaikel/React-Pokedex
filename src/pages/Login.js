import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import GeneralContext from '../context/GeneralContext';
import '../style/login.css';

export default function Login() {
  let navigate = useNavigate(); // nova forma de gerenciar history.push no react router V@6
  const { setIsLogged, setUserData } = useContext(GeneralContext);
  const [ inputEmail, setInputEmail ] = useState('');
  const [ inputPassword, setInputPassword ] = useState('');
  const [ loginBtnIsDisabled, setLoginBtnIsDisabled ] = useState(true);

  useEffect(() => {
    validateInputs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputEmail, inputPassword])

  const validateEmail = () => (/\S+@\S+\.\S+/).test(inputEmail);
  // const validatePassword = () => inputPassword.length > Number('5'); 
  // como password é opicional, comentei a função
  const validateInputs = () => {
    if(validateEmail()){
      setLoginBtnIsDisabled(false);
    } else {
      setLoginBtnIsDisabled(true);
    }
  };

  const loginFunction = () => {
    const homePath = '/home';
    setIsLogged(true);
    setUserData( prevState => ({ ...prevState, user: inputEmail }));
    navigate(homePath);
  };

  const userOnChange = ({ target: { value, name }}) => {
    name === 'email' ? setInputEmail(value) : setInputPassword(value);
  }

  return (
    <div>
      <Header/>
      <div className='login-div'>
        <h2>Faça o seu login</h2>
        <input type="text" placeholder="Seu e-mail" autoFocus="1" name="email" onChange={ userOnChange } />
        {/* <input type="password" placeholder="Senha (opicional)" onChange={ userOnChange } /> */}
        <button type='button' onClick={ loginFunction } disabled={ loginBtnIsDisabled } >Login</button>
      </div>
    </div>
  )
}
