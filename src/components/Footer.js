import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from "react-router-dom";
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'

const Footer = () => {

  return (
    <>
      <DivFooterCntr>

        <DivContactCntr>
          <P1>CONTACT</P1>
          <UL>
            <LI>PHONE - &nbsp; (999) 999-9999 </LI>
            <LI>EMAIL - &nbsp; olivier.donze@example.com</LI>
            <LI>ADDRESS - &nbsp;999 Example Street, Example, AA, A8A 9A3</LI>
            <LI>
              <DivIcons>
                <Link to='https://github.com/Olivier443'><IMG2 src={github} alt="icon of Github" /></Link>
                <Link to='/'><IMG2 src={linkedin} alt="icon of Linkedin" /></Link>
              </DivIcons>
            </LI>
          </UL>
        </DivContactCntr>

        <DivBar2></DivBar2>

        <DivMapSiteCntr>
          <P1>SITE MAP</P1>
          <UL>
            <LI><NavLink1 to="/hero" style={{ textDecoration: 'none' }}>Hero</NavLink1></LI>
            <LI><NavLink1 to='/projects' style={{ textDecoration: 'none' }}>Projects</NavLink1></LI>
            <LI><NavLink1 to='/about' style={{ textDecoration: 'none' }}>About</NavLink1></LI>
            <LI><NavLink1 to='/about' style={{ textDecoration: 'none' }}>Questions</NavLink1></LI>
            <LI><NavLink1 to='/about' style={{ textDecoration: 'none' }}>Contact</NavLink1></LI>
            <LI><NavLink1 to='/weather' style={{ textDecoration: 'none' }}>Weather</NavLink1></LI>
          </UL>
        </DivMapSiteCntr>

      </DivFooterCntr>
    </>
  )
}

export default Footer

// This is the whole component
const DivFooterCntr = styled.footer`
    width: 100vw;
    height: auto;
    background-image: linear-gradient(to right, #000000, #434343);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    font-weight: bold;
    gap: 2vw;
    border-bottom: solid #000 1px;
`

// This is the title CONTACT and SITE MAP
const P1 = styled.p`
    font-size: 1.4rem;
    font-weight: bold;
    color: #fff;
`

// This is the container including the Contact info
const DivContactCntr = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  height: auto;
  color: #fff;

  @media (max-width: 800px) {
    width: auto;
    padding: 2vh 1vw 0 4vw;
  }

  @media (min-width: 801px) {
    width: 26vw;
    padding: 2vh 1vw 0 1vw;
  }
`

// This is the container including the Site Map info
const DivMapSiteCntr = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  height: auto;
  color: #fff;

  @media (max-width: 800px) {
    width: auto;
    padding: 2vh 1vw 0 4vw;
  }

  @media (min-width: 801px) {
    width: 26vw;
    padding: 2vh 1vw 0 1vw;
    color: #fff;
  }
`

const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 2vh 0 8vh 0;
`

const LI = styled.li`
    font-size: 0.8rem;
    font-weight: bold;
    color: #fff;
`

const NavLink1 = styled(NavLink)`
    font-size: 0.8rem;
    font-weight: bold;
    color: #fff;
`

const DivBar2 = styled.div`
    display: flex;
    flex-direction: column;
    height: 20vh;
    margin: -4vh 0 0 0;
    background-image: linear-gradient(to right, #fff, #fff);
    width: 1px;
`

// Container including the icons in the Contact section
const DivIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 4vw;
  min-height: 6vh;
  gap: 0.5vw;
`

// Styling for the icons
const IMG2 = styled.img`
  display: flex;
  min-width: auto;
  min-height: 3vh;
  border-radius: 50%;
  background-color: #fff;
`
