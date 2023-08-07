import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import Hero from './Hero';
import Techicons from './Techicons';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTurnDown, faPersonDigging } from '@fortawesome/free-solid-svg-icons'

const Root = () => {

  const navigate = useNavigate();
  
  return (
    <div>
      <Navbar />
      <Hero />

      <DIVABOUT>
        <DIVTEXT>
          <P1>Learn to Know Me!</P1>
          <P2>All your questions answered!</P2>
        </DIVTEXT>
        <DIVBTN>
          <BTN onClick={ () => {navigate('About')} }>Take me there!</BTN>
          <P3>Or Keep Scrolling!</P3>
          <FontAwesomeIcon icon={faArrowTurnDown} style={{ fontSize: '100px', color: '#232526' }} />
        </DIVBTN>
      </DIVABOUT>

      <Techicons />

      <DIVPROJECTS>
        <P4>Projects - In Construction!</P4>
        <P5>Stay tune!</P5>
        <DIVTEMP>
          <FontAwesomeIcon icon={faPersonDigging} style={{ fontSize: '100px', color: '#fff' }} />
        </DIVTEMP>
      </DIVPROJECTS>

      <Footer />
    </div>
  )
}

export default Root

const DIVABOUT = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to right, #F0C27B, #4B1248);
  margin-top: -2vh;
  display: flex;
`

const DIVTEXT = styled.div`
  width: 40vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const DIVBTN = styled.div`
  width: 60vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
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
`

const P1 = styled.p`
  font-weight: bold;
  font-size: 6vh;
  margin-left: 8vw;
  margin-top: 18vh;
  margin-bottom: 1vh;
`

const P2 = styled.p`
  font-weight: bold;
  font-size: 4vh;
  margin-left: 12vw;
  margin-top: 4vh;
  margin-bottom: 2vh;
  font-style: italic;
`

const P3 = styled.p`
  font-weight: bold;
  font-size: 4vh;
  margin-left: 16vw;
  margin-top: 8vh;
  margin-bottom: 8vh;
  font-style: italic;
`

const DIVPROJECTS = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to right, #0F2027, #203A43, #2C5364);
  margin-top: -2vh;
  display: flex;
`

const P4 = styled.p`
  font-weight: bold;
  font-size: 6vh;
  margin-left: 8vw;
  margin-top: 18vh;
  margin-bottom: 1vh;
  color: #fff;
`

const P5 = styled.p`
  font-weight: bold;
  font-size: 4vh;
  margin-left: 12vw;
  margin-top: 4vh;
  margin-bottom: 2vh;
  font-style: italic;
  color: #fff;
`

const DIVTEMP = styled.div`
  margin-top: 40vh;
`

