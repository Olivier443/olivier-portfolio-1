import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

const questions = [
  {
    title: "Question 1",
    text: "Lorem ipsum odor amet, consectetuer adipiscing elit."
  },
  {
    title: "Question 2",
    text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Sem aliquam vestibulum consequat sapien vehicula nam metus lacus. Fusce nam quisque parturient etiam et ridiculus placerat risus eget."
  },
  {
    title: "Question 3",
    text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Sem aliquam vestibulum consequat sapien vehicula nam metus lacus."
  },
  {
    title: "Question 4",
    text: "Lorem ipsum odor amet, consectetuer adipiscing elit."
  },
  {
    title: "Question 5",
    text: "Blandit turpis id lorem metus nostra, malesuada posuere porta."
  },
];

const Accordeon = () => {
  return (
    <div>
      <Accordeondata />
    </div>
  )
}

const Accordeondata = () => {
  return (
    <DivAccordeonCntr>
      {questions.map((ev, i) => (<AccordeonItem title={ev.title} text={ev.text} key={ev.title} />))}
    </DivAccordeonCntr>
  )
}

const AccordeonItem = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div onClick={handleToggle}>
      <DivQuestionCntr>
        <P1>{title}</P1>
        <P2>{isOpen ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}</P2>
      </DivQuestionCntr>
      {isOpen && <DivText>{text}</DivText>}
    </div>
  )
}

export default Accordeon

// This is the container of the component
const DivAccordeonCntr = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 90vw;
    height: auto;
    border: solid black 2px;
    border-radius: 20px;
    margin: 8vh 0 8vh 0;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 40vw;
    height: auto;
    border: solid black 2px;
    border-radius: 20px;
    // margin: 8vh 0 8vh 0;
    margin: 8vh 0 0 0;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
`

// container including the question and the triangle
const DivQuestionCntr = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    text-align: center;
    font-weight: bold;
    font-size: 1.6rem;
    width: 80vw;
    height: auto;
    border-radius: 8px;
    border: solid green 1px;
    padding: 1vh 0 1vh 0;
    background-image: linear-gradient(to right, #FFEFBA,#FFFFFF);
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    text-align: center;
    font-weight: bold;
    font-size: 1.6rem;
    width: 39.6vw;
    height: auto;
    border-radius: 20px;
    border: solid green 1px;
    padding: 1vh 0 1vh 0;
    background-image: linear-gradient(to right, #FFEFBA,#FFFFFF);
  }
`

// Color of the text for the question
const P1 = styled.p`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    text-align: center;
    font-weight: bold;
    font-size: 1.6rem;
    width: 80vw;
    height: auto;
    border-radius: 8px;
    padding: 1vh 0 1vh 0;
    background-image: linear-gradient(to right, #FFEFBA,#FFFFFF);
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    text-align: center;
    font-weight: bold;
    font-size: 1.6rem;
    width: 38vw;
    height: auto;
    border-radius: 8px;
    padding: 1vh 0 1vh 0;
    background-image: linear-gradient(to right, #FFEFBA,#FFFFFF);
  }
`

// container containing the answer
const DivText = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    text-align: center;
    font-weight: bold;
    font-size: 0.9rem;
    width: 80vw;
    height: auto;
    border-radius: 8px;
    border: solid blue 1px;
    padding: 1vh 0 1vh 0;
    margin: 0 0 1vh 4vw;
    background-color: azure;
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    text-align: center;
    font-weight: bold;
    font-size: 0.9rem;
    width: 35.6vw;
    height: auto;
    border-radius: 8px;
    border: solid blue 1px;
    padding: 1vh 0 1vh 0;
    margin: 0 0 1vh 4vw;
    background-color: azure;
  }
`

// This is the triangle
const P2 = styled.p`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 10vw;
    height: auto;
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 10vw;
    height: auto;
  }
`