import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';

const Header = styled.header`
height: 50px;
background: var(--Underpaper, #F6F6F6);
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
`
const LogoStyled = styled.img`
  margin-bottom: 10px;
`;

const Title = styled.h1`
color: var(--Text-Black, #0D0D0D);
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 30px;
margin: 10px 10px 0 20px;
`
const HistoryTrack = styled.div`
height: 30px;
display: flex;
padding: 5px 15px;
align-items: flex-start;
gap: 5px;
border-radius: 5px;
border: 1px solid var(--borders-elements, rgba(0, 0, 0, 0.20));
`
const SubTitle = styled.p`
color: var(--Text-Black, #0D0D0D);
font-family: SF Pro Text;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px;
margin 0;
`
const Colon = styled(SubTitle)`
color: var(--borders-elements, rgba(0, 0, 0, 0.20));
`
function MainPage() {





    return (
        <Header>
            <LogoStyled src="/icons/logo.svg" alt="logo"/>
            <Title>API-консолька</Title>
            <HistoryTrack>
                <SubTitle>some@email.com</SubTitle>
                <Colon>:</Colon>
                <SubTitle>sublogin</SubTitle>
            </HistoryTrack>
            <SubTitle>Выйти</SubTitle>
        </Header>
    )
}



export default withRouter(MainPage);