import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom";

const Footer = () => {

  return (
    <>
      <DivFooterCntr>

        <DivContactCntr>
          <P1>CONTACT</P1>
          <UL>
            <LI>PHONE - &nbsp; (999) 999-9999 </LI>
            <LI>EMAIL - &nbsp; john.doe@example.com</LI>
            <LI>ADDRESS - &nbsp;999 Example Street, Example, AA, H8S 9K3</LI>
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
  @media (max-width: 800px) {
    width: 100vw;
    height: auto;
    background-image: linear-gradient(to right, #000000, #434343);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    font-weight: bold;
    gap: 2vw;
    border-bottom: solid #000 1px;
  }

  @media (min-width: 801px) {
    width: 100vw;
    height: auto;
    background-image: linear-gradient(to right, #000000, #434343);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    font-weight: bold;
    gap: 2vw;
    border-bottom: solid #000 1px;
  }
`

// This is the title CONTACT and SITE MAP
const P1 = styled.p`
  @media (max-width: 800px) {
    font-size: 1.4rem;
    font-weight: bold;
    color: #fff;
    padding: 4vh 0 2vh 0;
  }

  @media (min-width: 801px) {
    font-size: 1.4rem;
    font-weight: bold;
    color: #fff;
    padding: 4vh 0 2vh 0;
  }
`

// This is the container including the Contact info
const DivContactCntr = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: auto;
    color: #fff;
    padding: 0 0 0 1vw;
    align-self: flex-start;
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: column;
    height: auto;
    color: #fff;
    padding: 0 0 0 1vw;
    align-self: flex-start;
  }
`

// This is the container including the Site Map info
const DivMapSiteCntr = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: auto;
    color: #fff;
    padding: 0 0 0 1vw;
    align-self: flex-start;

  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: column;
    height: auto;
    color: #fff;
    padding: 0 0 0 1vw;
    align-self: flex-start;
  }
`

const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 2vh 0 8vh 0;
`

const LI = styled.li`
  @media (max-width: 800px) {
    font-size: 0.8rem;
    font-weight: bold;
    color: #fff;
  }

  @media (min-width: 801px) {
    font-size: 0.8rem;
    font-weight: bold;
    color: #fff;
  }
`

const NavLink1 = styled(NavLink)`
  @media (max-width: 800px) {
    font-size: 0.8rem;
    font-weight: bold;
    color: #fff;
  }

  @media (min-width: 801px) {
    font-size: 0.8rem;
    font-weight: bold;
    color: #fff;
  }
`

const DivBar2 = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: 26vh;
    background-image: linear-gradient(to right, #fff, #fff);
    width: 1px;
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: column;
    height: 26vh;
    background-image: linear-gradient(to right, #fff, #fff);
    width: 1px;
  }
`
