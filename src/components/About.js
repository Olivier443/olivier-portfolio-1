import React from 'react'
import styled from 'styled-components'

import Navbar from '../Navbar/Navbar'
import Mycard from './Mycard'
import Accordeon from './Accordeon'
import Form from './Form';
import Footer from './Footer'
import Techicons from './Techicons'

const About = () => {
  return (
    <>
      <Navbar />

      <DIV0>

        <DIV1>
          <Mycard />
        </DIV1>

        <DIVBAR></DIVBAR>

        <DIV2>
          <Accordeon />
        </DIV2>

        <DIVBAR></DIVBAR>

        <div>
          <Form />
          <IFRAME  src="https://www.youtube-nocookie.com/embed/LVbUNRwpXzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></IFRAME>
        </div>

      </DIV0>

      <Techicons />

      <Footer />

    </>
  )
}

export default About

const DIV0 = styled.div`
  display: flex;
  margin-top: 8vh;
  background-image: linear-gradient(to right, #005AA7, #FFFDE4);
  justify-content: center;
  height: 92vh;
`

const DIVBAR = styled.div`
  height: 80vh;
  width: 1px;
  display: flex;
  background-image: linear-gradient(to right, #0F2027, #203A43, #2C5364);
  margin-left: 1vw;
  margin-top: 5vh;
`

const DIV1 = styled.div`
margin-top: 5vh;
margin-left: 1vw;
`

const DIV2 = styled.div`
  margin-top: 5vh;
  margin-left: 1vw;
`

const IFRAME = styled.iframe`
  width: 20vw;
  margin-top: 2vh;
  margin-left: 1vw;
  border-radius: 20px;
`