import React from 'react'
import { useNavigate } from 'react-router-dom';
import DateTime from './DateTime'
import styled from 'styled-components'

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <NAV1>
      <DIV1>
        <DateTime/>
      </DIV1>
      <DIV2>
        <P1>Dark Theme</P1>
      </DIV2>
      <DIV2>
        <BTNWEATHER onClick={ () => {navigate('/weather')} }>Weather</BTNWEATHER>
      </DIV2>
      <DIV2>
        <BTN1 onClick={ () => {navigate('/')} }>HOME 🏠</BTN1>
        <BTN1>BTN1</BTN1>
        <BTN1>BTN2</BTN1>
      </DIV2>
    </NAV1>
  )
}

export default Navbar

const NAV1 = styled.nav`
  width: 100%;
  border: solid black 1px;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-self: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-image: linear-gradient(to right, #000000, #434343);
`

const BTN1 = styled.button`
  width: 6vw;
  height: 4vh;
  border-radius: 50px;
  border: solid green 1px;
  align-self: center;
  background-image: linear-gradient(to right, #24C6DC    , #514A9D);
  cursor: pointer;
`

const BTNWEATHER = styled.button`
  width: 6vw;
  height: 4vh;
  border-radius: 50px;
  align-self: center;
  background-image: linear-gradient(to right, #F0C27B, #4B1248);
  cursor: pointer;
  font-weight: bold;
  color: #fff;
`

const DIV1 = styled.div`
  display: flex;
`

const DIV2 = styled.div`
  display: flex;
  gap: 4px;
`

const P1 = styled.p`
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 50px;
  border: solid blue 1px;
  color: white;
  width: 6vw;
  height: 4vh;
  background-image: linear-gradient(to right, #24C6DC    , #514A9D);
`