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
    <DIVACCORDEON>
      {questions.map((ev, i) => (<AccordeonItem title={ev.title} text={ev.text} key={ev.title} />))}
    </DIVACCORDEON>
  )
}

const AccordeonItem = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div onClick={handleToggle}>
      <DIVQUESTION>
        <P1>{title}</P1>
        <P2>{isOpen ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}</P2>
      </DIVQUESTION>
      {isOpen && <DIVTEXT>{text}</DIVTEXT>}
    </div>
  )
}

export default Accordeon

// This is the container of the component
const DIVACCORDEON = styled.div`
  border: solid black 2px;
  border-radius: 20px;
  height: 80vh;
  width: 38vw;
  padding-left: 1vw;
  padding-right: 1vw;
  background-image: linear-gradient(to right, #83a4d4, #b6fbff);
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`

// container including the question and the triangle
const DIVQUESTION = styled.div`
  display: flex;
  border: solid green 1px;
  width: 36vw;
  height: 4vh;
  background-image: linear-gradient(to right, #FFEFBA,#FFFFFF);
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding-left: 1vw;
  padding-right: 1vw;
  margin-top: 1vh;
`

// Color of the text for the question
const P1 = styled.p`
  font-size: large;
  font-weight: bold;
`

// container containing the answer
const DIVTEXT = styled.div`
  border: solid 1px blue;
  font-weight: bold;
  font-size: medium;
  background-color: azure;
  width: 34vw;
  margin-left: 2vw;
  border-radius: 8px;
  padding-left: 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

// This is the triangle
const P2 = styled.p`
  font-size: larger;
`