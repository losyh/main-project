import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

import {authenticate} from 'src/store/actions/auth';


const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Form = styled.section`
  width: 520px;
  height: 425px;
  left: calc(50% - 520px / 2);
  top: 222px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 40px 30px;
`;

const LogoStyled = styled.img`
  margin-bottom: 20px;
`;

const Input = styled.input`
width: 460px;
height: 40px;
border-radius: 5px;
border: 1px solid var(--borders-elements, rgba(0, 0, 0, 0.20));
background: #FFF;
margin: 0 0 20px;
color: var(--Text-Black, #0D0D0D);
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 30px;
padding-left: 5px;
`;

const InputPass = styled(Input)`
letter-spacing: 1.8px;
font-weight: 900;
`;

const Title = styled.h1`
color: var(--Text-Black, #0D0D0D);
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 30px;
margin: 0 0 20px;
`

const SubTitle = styled.p`
color: var(--Text-Black, #0D0D0D);
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px;
margin: 0 0 5px;
display: inline-flex;
`

const Option = styled(SubTitle)`
color: var(--Text-gray, #999);
text-align: right;
font-size: 12px;
display: inline-flex;
margin-left: 313px
`
const LogBtn = styled.button`
width: 110px;
height: 40px;
border-radius: 5px;
background: linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4;
color: #FFF;
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 30px;
outline: none;
border: none;
cursor: pointer;
`

const LinkToGit = styled.a`
color: var(--Text-gray, #999);
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px;
margin: 20px 0 0; 
cursor: pointer;
text-decoration: none;
`

function LoginPage({history}) {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [sublogin, setSubLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const loading = useSelector((state) => state.auth.loading);
  const isLoggedIn = useSelector((state) => !!state.auth.sessionKey?.length);
  
  console.log('loading', loading);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/console');
    }
  }, [isLoggedIn]);

  const doLogin = () => {
    dispatch(
      authenticate({
        login,
        sublogin,
        password,
      })
    );
  };

  function onSubmit(event) {
    event.preventDefault();
    doLogin();
  }

  const errorInp = error ? {outline: '1px solid red', boxShadow: '1px 1px 2px 0 red'} : null;
  const errorP = error ? {color: 'var(--Red, #CF2C00)'} : null;
  return (
    <Wrapper>
      <LogoStyled src="/icons/logo.svg" alt="logo" />
      <Form onSubmit={onSubmit} action="/">
        <Title>API-консолька</Title>
        <SubTitle style={errorP}>Логин</SubTitle>
        <Input value={login} onChange={(e) => setLogin(e.target.value)} style={errorInp}/>
        <SubTitle style={errorP}>Сублогин</SubTitle>
        <Option>Опционально</Option>
        <Input value={sublogin} onChange={(e) => setSubLogin(e.target.value)} style={errorInp}/>
        <SubTitle style={errorP}>Пароль</SubTitle>
        <InputPass value={password} onChange={(e) => setPassword(e.target.value)} type='password' style={errorInp}/>
        <LogBtn type="submit" onClick={onSubmit}>
          Войти
        </LogBtn>
      </Form>
      <LinkToGit href="https://github.com/losyh/main-project" target="_blank">@link-to-your-github</LinkToGit>
    </Wrapper>
  );
}

export default withRouter(LoginPage);
