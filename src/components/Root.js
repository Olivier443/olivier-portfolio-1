import React from 'react'
import styled from 'styled-components'
import Hero from './Hero';
import Techicons from './Techicons';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons'

const Root = () => {

  const navigate = useNavigate();
  
  return (
    <div>
      
      <Hero />

      <DivAboutCntr>
        <DivTextAbout>
          <P1About>Learn to Know Me!</P1About>
          <P2About>All your questions answered!</P2About>
        </DivTextAbout>
        <DivBtnAbout>
          <BTN onClick={ () => {navigate('About')} }>Take me there!</BTN>
          <P3About>Or Keep Scrolling!</P3About>
          <FontAwesomeIcon icon={faArrowTurnDown} style={{ fontSize: '100px', color: '#232526', marginTop: '10vh', marginLeft: '-30vw' }} />
        </DivBtnAbout>
      </DivAboutCntr>

      <Techicons />

      <DivProjectsCntr>
        <DivTextProjects>
          <P1>Projects!</P1>
          <P2>Made with React, JavaScript, CSS, Style-Components, and more... Deployed with Vercel...</P2>
        </DivTextProjects>
        <DivBtnProjects>
          <BTN onClick={ () => {navigate('projects')} }>Take me there!</BTN>
        </DivBtnProjects>
      </DivProjectsCntr>

      <Footer />
    </div>
  )
}

export default Root

const DivAboutCntr = styled.div`
  width: 100vw;
  height: 92vh;
  background-image: linear-gradient(to right, #F0C27B, #4B1248);
  display: flex;
  @media (max-width: 350px) {
    height: 66vh;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 108vw;
  }
`

const DivTextAbout = styled.div`
  width: 40vw;
  height: 46vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 350px) {
    height: 40vh;
    justify-content: center;
    align-items: center;
    width: 90vw;
  }
`

const DivBtnAbout = styled.div`
  width: 60vw;
  height: 100vh;
  @media (max-width: 350px) {
    height: 9vh;
  }
`

const P1About = styled.p`
  font-weight: bold;
  font-size: 6vh;
  margin-left: 8vw;
  margin-top: 18vh;
  margin-bottom: 1vh;
  @media (max-width: 350px) {
    font-size: 6vh;
    margin-top: 0vh;
    margin-bottom: 0vh;
    margin-left: 0vw;
    padding: 0 0 6vh 0;
  }
`

const P2About = styled.p`
  font-weight: bold;
  font-size: 4vh;
  margin-left: 12vw;
  margin-top: 4vh;
  margin-bottom: 2vh;
  font-style: italic;
  @media (max-width: 350px) {
    font-size: 4vh;
    margin-top: 0vh;
    margin-bottom: 0vh;
  }
`

const P3About = styled.p`
  font-weight: bold;
  font-size: 4vh;
  margin-left: 16vw;
  margin-top: 8vh;
  margin-bottom: 8vh;
  font-style: italic;
  @media (max-width: 350px) {
    margin-top: 2vh;
    margin-left: 12vw;
  }
`

const DivProjectsCntr = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to right, #0F2027, #203A43, #2C5364);
  margin-top: -2vh;
  display: flex;
  color: #fff;
  @media (max-width: 350px) {
    height: 60vh;
    margin-top: -2vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 108vw;
  }
`

const DivTextProjects = styled.div`
  width: 40vw;
  height: 46vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 350px) {
    height: 40vh;
    justify-content: center;
    align-items: center;
    width: 90vw;
  }
`

const P1 = styled.p`
  font-weight: bold;
  font-size: 6vh;
  margin-left: 8vw;
  margin-top: 18vh;
  margin-bottom: 1vh;
  @media (max-width: 350px) {
    font-size: 6vh;
    margin-top: 0vh;
    margin-bottom: 0vh;
    margin-left: 0vw;
    padding: 0 0 6vh 0;
  }
`

const P2 = styled.p`
  font-weight: bold;
  font-size: 4vh;
  margin-left: 12vw;
  margin-top: 4vh;
  margin-bottom: 2vh;
  font-style: italic;
  @media (max-width: 350px) {
    font-size: 4vh;
    margin-top: 0vh;
    margin-bottom: 0vh;
  }
`

const DivBtnProjects = styled.div`
  width: 60vw;
  height: 100vh;
  @media (max-width: 350px) {
    height: 9vh;
  }
`

const BTN = styled.button`
  width: 18vw;
  height: 9vh;
  border-radius: 20px;
  background-image: linear-gradient(to right, #232526, #414345);
  color: #fff;
  font-weight: bold;
  font-size: larger;
  margin-top: 26vh;
  margin-left: 10vw;
  cursor: pointer;
  &:hover
  {
    background: linear-gradient(to right, #C04848, #480048);
  }

  @media (max-width: 350px) {
    width: 40vw;
    margin-top: 0vh;
  }
`
