import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

const Footer = () => {

  return (
    <>
      <FOOTER>

        <DIVCONTACT>
          <P1><SPAN>CONTACT</SPAN></P1>
          <P2><SPAN>PHONE - &nbsp;</SPAN>(999) 999-9999</P2>
          <P2><SPAN>EMAIL - &nbsp;</SPAN>john.doe@example.com</P2>
          <P2><SPAN>ADDRESS - &nbsp;</SPAN>999 Example Street, Example, AA, H8s 9K3</P2>
        </DIVCONTACT>

        <DIVBAR></DIVBAR>

        <DIVMAP>
          <P1>SITE MAP</P1>
          <UL>
            <LI><NavLink1 to="/hero" style={{ textDecoration: 'none' }}>Hero</NavLink1></LI>
            <LI><NavLink1 to='/projects' style={{ textDecoration: 'none' }}>Projects</NavLink1></LI>
            <LI><NavLink1 to='/about' style={{ textDecoration: 'none' }}>About</NavLink1></LI>
            <LI><NavLink1 to='/about' style={{ textDecoration: 'none' }}>Questions</NavLink1></LI>
            <LI><NavLink1 to='/about' style={{ textDecoration: 'none' }}>Contact</NavLink1></LI>
            <LI><NavLink1 to='/weather' style={{ textDecoration: 'none' }}>Weather</NavLink1></LI>
          </UL>
        </DIVMAP>

      </FOOTER>
    </>
  )
}

export default Footer

// This is the whole component
const FOOTER = styled.footer`
  display: flex;
  width: 100vw;
  height: 20vh;
  gap: 2vw;
  background-image: linear-gradient(to right, #000000, #434343);
`

// This is the container including the contact info
const DIVCONTACT = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding-left: 1vw;
  height: 16vh;
  align-self: center;
`

// This is the title CONTACT and SITE MAP
const P1 = styled.p`
  font-weight: bold;
`

// This is the text in the CONTACT container
const P2 = styled.p`
  font-size: xx-small;
  display: flex;
  line-height: 0%;
`

// This is the span for the text in the CONTACT container
const SPAN = styled.span`
  font-weight: bold;
`

// This is the container including the contact info
const DIVMAP = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding-left: 1vw;
  height: 16vh;
  align-self: center;
`

const UL = styled.ul`
  list-style: none;
`

const LI = styled.li`
  font-size: xx-small;
  line-height: 16px;
  font-weight: bold;
  color: #fff;
`

const NavLink1 = styled(NavLink)`
  color: #fff;
`

const DIVBAR = styled.div`
  height: 14vh;
  width: 1px;
  display: flex;
  background-image: linear-gradient(to right, #fff, #fff);
  margin-top: 2vh;
`
