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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: auto;
  border: solid black 2px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  
  @media (max-width: 800px) {
    width: 90vw;
    margin: 8vh 0 8vh 0;
  }

  @media (min-width: 801px) {
    width: 40vw;
    margin: 8vh 0 0 0;
  }
`

// container including the question and the triangle
const DivQuestionCntr = styled.div`
    display: flex;
    font-weight: bold;
    font-size: 1.6rem;
    height: auto;
    border: solid green 1px;
    border-radius: 20px;
    padding: 1vh 0 1vh 0;
    background-image: linear-gradient(to right, #FFEFBA,#FFFFFF);

  @media (max-width: 800px) {
    width: 80vw;
  }

  @media (min-width: 801px) {
    width: 39.8vw;
  }
`

// Color of the text for the question
const P1 = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  text-align: center;
  font-weight: bold;
  font-size: 1.6rem;
  height: auto;
  border-radius: 8px;
  padding: 1vh 0 1vh 0;
  background-image: linear-gradient(to right, #FFEFBA,#FFFFFF);

  @media (max-width: 800px) {
    width: 80vw;
  }

  @media (min-width: 801px) {
    width: 38vw;
  }
`

// container containing the answer
const DivText = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  font-size: 0.9rem;
  height: auto;
  border-radius: 8px;
  border: solid blue 1px;
  padding: 1vh 0 1vh 0;
  margin: 0 0 1vh 4vw;
  background-color: azure;

  @media (max-width: 800px) {
    width: 80vw;
  }

  @media (min-width: 801px) {
    width: 35.6vw;
  }
`

// This is the triangle
const P2 = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 10vw;
  height: auto;
`