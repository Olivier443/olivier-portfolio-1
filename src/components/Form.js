import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'

const Thunder = <FontAwesomeIcon icon={faBolt} style={{color: "yellow", }} />

const Form = () => {
  return (
    <DIVFORM>
      <DIVTITLE>
        <DIVSTAR>{Thunder}{Thunder}{Thunder}</DIVSTAR>
          <PTITLE>Contact Form</PTITLE>
        <DIVSTAR>{Thunder}{Thunder}{Thunder}</DIVSTAR>
      </DIVTITLE>

      <form>
        <div>
          <LABEL>First Name:</LABEL>
          <INPUT placeholder='John' />
        </div>

        <div>
          <LABEL>Last Name:</LABEL>
          <INPUT placeholder='Doe' />
        </div>

        <div>
          <LABEL>Email:</LABEL>
          <INPUT placeholder='john.doe@example.com' />
        </div>

        <div>
          <LABEL>Inquiry:</LABEL>
          <TEXTAREA placeholder='Type your question!' />
        </div>

        <DIVBUTTON>
          <BTN>Submit</BTN>
          <BTN>Clear</BTN>
        </DIVBUTTON>
      </form>
    </DIVFORM>
  )
}

export default Form

// Container of the component
const DIVFORM = styled.div`
  width: 20vw;
  margin-left: 1vw;
  margin-top: 5vh;
  border: solid black 2px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`

// This is the container containing the stars
const DIVSTAR = styled.div`
  display: flex;
  gap: 4px;
`

// This is the title
const PTITLE = styled.p`
  padding-left: 1vw;
  padding-right: 1vw;
  font-weight: bold;
`

// Styling for the container including the title
const DIVTITLE = styled.label`
  width: 14vw;
  display: flex;
  // border: solid red 1px;
  background-color: yellow;
  width: 20vw;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-image: linear-gradient(to right, #bdc3c7, #2c3e50);
  justify-content: center;
  align-items: center;
`

// Styling for the label
const LABEL = styled.label`
  font-weight: bold;
  width: 14vw;
  display: flex;
  // border: solid red 1px;
  padding-left: 1vw;
  padding-top: 1vh;
`

// Styling for the input
const INPUT = styled.input`
  width: 14vw;
  margin-left: 1vw;
  margin-top: 4px;
`

// Styling for the text area
const TEXTAREA = styled.textarea`
  width: 14vw;
  height: 10vh;
  margin-left: 1vw;
  margin-top: 4px;
`

// Styling for the container that includes the buttons
const DIVBUTTON = styled.div`
  width: 20vw;
  // border: solid red 2px;
  height: 8vh;
  margin-top: 2vh;
  display: flex;
  justify-content: space-around;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  background-image: linear-gradient(to right, #bdc3c7, #2c3e50);
  align-items: center;
`

// Styling of the buttons
const BTN = styled.button`
  height: 6vh;
  width: 6vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background-image: linear-gradient(to right, #000000, #434343);
  font-weight: bold;
  color: #fff;
`