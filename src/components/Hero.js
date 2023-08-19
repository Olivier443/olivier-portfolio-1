import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import coding from '../assets/coding.jpg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'

const Hero = () => {
  return (
    <>
      <DIV0>
        <DIV1>
          <H1>Hi, <br />I am Olivier Donze</H1>
          <H2>Love learning and implementing new technologies...</H2>
          <DIV2>
          <Link to='https://github.com/Olivier443'><IMG2 src={github} alt="icon of Github"></IMG2></Link>
          <Link to='/'><IMG2 src={linkedin} alt="icon of Linkedin" /></Link>
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
  @media (max-width: 350px) {
    flex-direction: column;
    height: 100vh;
    margin-top: 14vh;
    width: 108vw;
  }
`

const DIV1 = styled.div`
  width: 40vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 350px) {
    flex-direction: column;
    height: 40vh;
    width: 94vw;
    align-self: center;
  }
`

const DIVBAR = styled.div`
  height: 70vh;
  width: 1px;
  display: flex;
  background-image: linear-gradient(to right, #348F50    , #56B4D3);
  margin-bottom: 8vh;
  @media (max-width: 350px) {
    height: 10vh;
    margin-bottom: 0vh;
  }
`

const DIV3 = styled.div`
  width: 40vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  @media (max-width: 350px) {
    height: 30vh;
    margin-bottom: 2vh;
  }
`

const H1 = styled.h1`
color: #BBD2C5;
margin-bottom: 4vh;
@media (max-width: 350px) {
    padding-bottom: 2vh;
    padding-top: 1vh;
    margin-bottom: 0vh;
    margin-left: -2vw;
  }
`

const H2 = styled.h2`
color: white;
font-style: italic;
color: #BBD2C5;
margin-left: 2vw;
@media (max-width: 350px) {
    padding-bottom: 1vh;
    padding-top: 1vh;
  }
`

const DIV2 = styled.div`
  display: flex;
  gap: 6px;
  margin-left: 2vw;
  @media (max-width: 350px) {
    margin-top: 2vh;
  }
`

const IMG2 = styled.img`
  width: 30px;
  border-radius: 50%;
  background-color: lightgray;
  margin-top: 2vh;
  @media (max-width: 350px) {
    margin-top: 0vh;
  }
`

const IMG1 = styled.img`
  border-radius: 50%;
  width: 20vw;
  height: 40vh;

  @media (max-width: 1700px) {
    width: 50%;
  }

  @media (max-width: 1500px) {
    width: 60%;
  }

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 1000px) {
    width: 80%;
  }

  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 60%;
    margin-top: 4vh;
  }

  @media (max-width: 400px) {
    width: 100%;
    height: 40%;
    margin-top: 10vh;
  }

  @media (max-width: 350px) {
    width: 50vw;
    margin-left: -4vw;
  }
`



