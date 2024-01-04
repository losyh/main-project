import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

import {authenticate} from 'src/store/actions/auth';


console.log('test branch');
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
`

const LinkToGit = styled.p`
color: var(--Text-gray, #999);
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px;
margin: 20px 0 0; 
`

function LoginPage({history}) {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [sublogin, setSubLogin] = useState('');
  const [password, setPassword] = useState('');
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

  return (
    <Wrapper>
      <LogoStyled src="/icons/logo.svg" alt="" />
      <Form onSubmit={onSubmit} action="/">
        <Title>API-консолька</Title>
        <SubTitle>Логин</SubTitle>
        <Input value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Логин" />
        <SubTitle>Сублогин</SubTitle>
        <Input value={sublogin} onChange={(e) => setSubLogin(e.target.value)} placeholder="Сублогин" />
        <SubTitle>Пароль</SubTitle>
        <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" />
        <LogBtn type="submit" onClick={onSubmit}>
          Войти
        </LogBtn>
      </Form>
      <LinkToGit>@link-to-your-github</LinkToGit>
    </Wrapper>
  );
}

export default withRouter(LoginPage);
