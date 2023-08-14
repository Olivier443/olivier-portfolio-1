import React from 'react'
import Mycard from './Mycard'
import Accordeon from './Accordeon'
import styled from 'styled-components'
import Form from './Form';
import Footer from './Footer'
import Techicons from './Techicons'
import ScrollTop from './ScrollTop';

const About = () => {
  
  return (
    <>
    <ScrollTop />
    <DivAbout>

      <DivCardAccordForm>

        <DivForCardAndAccord>
          <DivMyCardCntr>
            <Mycard />
          </DivMyCardCntr>

          <DivBar></DivBar>

          <DivAccordCntr>
            <Accordeon />
          </DivAccordCntr>
        </DivForCardAndAccord>

        <DivBar></DivBar>

        <DivFormCntr>
          <DivForm>
            <Form />
          </DivForm>
          <DivVideo>
            <IFrame  src="https://www.youtube-nocookie.com/embed/LVbUNRwpXzw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></IFrame>
          </DivVideo>
        </DivFormCntr>

      </DivCardAccordForm>

      <Techicons />

      <Footer />

    </DivAbout>
    </>
  )
}

export default About

// Whole container including the components, techicons, and footer
const DivAbout = styled.div`
  @media (max-width: 800px) {
    width: 100vw;
    height: auto;
    flex-direction: column;
    margin: 8vh 0 0 0;
    justify-content: center;
    align-content: center;
  }
`

// This is the container that contains only the myCard, Accordeon, Contact Form, and Video
const DivCardAccordForm = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 96vw;
    height: auto;
    background-image: linear-gradient(to right, #005AA7, #FFFDE4);
  }
`

// This is a container to be used only when width is >= 801px. This includes MyCard and Accordeon
const DivForCardAndAccord = styled.div`
    @media (min-width: 801px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: auto;
    margin-top: 8vh;
    background-image: linear-gradient(to right, #005AA7, #FFFDE4);
  }
`


// This is the container including the myCard component
const DivMyCardCntr = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 94vw;
    height: auto;
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    width: 44vw;
    height: auto;
  }
`

const DivBar = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 1px;
    height: 8vh;
    background-image: linear-gradient(to right, #0F2027, #203A43, #2C5364);
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 0;
    height: 0;
    background-image: linear-gradient(to right, #0F2027, #203A43, #2C5364);
  }
`

// This is the container including the accordeon component
const DivAccordCntr = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 94vw;
    height: auto;
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    width: 44vw;
    height: auto;
  }
`

// This is the container including the contact Form component and video
const DivFormCntr = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 94vw;
    height: auto;
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    width: 100vw;
    height: auto;
    background-image: linear-gradient(to right, #005AA7, #FFFDE4);
  }
`

// This is the container including the form
const DivForm = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 94vw;
    height: auto;
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    width: 44vw;
    height: auto;
  }
`

// This is the container including the video
const DivVideo = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 44vw;
    height: auto;
    margin: 0 0 8vh 0;
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-self: center;
    width: 45vw;
    height: auto;
    margin: 0 0 8vh 0;
  }
`

const IFrame = styled.iframe`
  @media (max-width: 800px) {
    width: 94vw;
    height: auto;
    border-radius: 20px;
    border: 0px;
  }

  @media (min-width: 801px) {
    width: 30vw;
    height: 36vh;
    border-radius: 20px;
    border: 0px;
  }
`
