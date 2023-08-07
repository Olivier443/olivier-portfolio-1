import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import coding from '../assets/coding.jpg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'

const Hero = () => {
  return (
    <>
    <DIV0>
      <DIV1>
        <Navbar />
        <H1>Hi, <br />I am Olivier Donze</H1>
        <H2>Love learning and implementing new technologies</H2>
        <DIV2>
          <IMG2 src={github} alt="icon of Github" />
          <IMG2 src={linkedin} alt="icon of Linkedin" />
        </DIV2>
      </DIV1>
      <DIVBAR></DIVBAR>
      <DIV3>
        <IMG1 src={coding} alt="picture of a phone" />
      </DIV3>
    </DIV0>
    </>
  )
}

export default Hero

const DIV0 = styled.div`
  width: 100vw;
  height: 93vh;
  margin-top: 8vh;
  background-image: linear-gradient(to right, #000428, #004e92);
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const DIV1 = styled.div`
  width: 40vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
`

const DIV2 = styled.div`
  display: flex;
  gap: 6px;
`

const DIV3 = styled.div`
  width: 40vw;
  height: 50vh;
  display: flex;
  justify-content: center;
`

const H1 = styled.h1`
color: #BBD2C5;
`

const H2 = styled.h2`
color: white;
font-style: italic;
color: #BBD2C5;
`

const IMG1 = styled.img`
  border-radius: 50%;
  width: 20vw;
  display: flex;
  justify-self: center;
  justify-items: center;
  justify-content: center;
`

const IMG2 = styled.img`
  width: 30px;
  border-radius: 50%;
  background-color: lightgray;
`

const DIVBAR = styled.div`
  height: 70vh;
  width: 1px;
  display: flex;
  background-image: linear-gradient(to right, #348F50    , #56B4D3);
  margin-bottom: 8vh;
`