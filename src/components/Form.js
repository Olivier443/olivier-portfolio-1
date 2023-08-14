import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'

const Thunder = <FontAwesomeIcon icon={faBolt} style={{color: "yellow", }} size="l" />

const Form = () => {
  
    const [enteredName, setEnteredName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredNameIsValid, setEnteredIsValid] = useState(true); // We want to use basic validation
  
    const nameInputChangeHandler = event => {
      setEnteredName(event.target.value);
    };

    const lastInputChangeHandler = event => {
      setEnteredLastName(event.target.value);
    };

    const emailInputChangeHandler = event => {
      setEnteredEmail(event.target.value);
    };
  
    const formSubmissionHandler = event => {
      event.preventDefault();
  
      // We want to ensure that the form submitted is not empty. If nothing typed in the input, nothing will happen when clicking on the btn submit
      if (enteredName.trim() === '') {
        setEnteredIsValid(false);
        return;
      }
  
      setEnteredIsValid(true); // If we pass successfully the validation above, then we update the state to true
      setEnteredName(''); // Cleaning function. After submitting the form the input is empty
      setEnteredLastName('');
      setEnteredEmail('');
    };

    // We want to put back the state empty when clearing the form
    const formClearHandle = event => {
      setEnteredName('');
      setEnteredLastName('');
      setEnteredEmail('');
      setEnteredIsValid(false);
    }

  return (
    <DivForm onSubmit={formSubmissionHandler}>

      <DivFormTitle>
        <DivStar>{Thunder}{Thunder}{Thunder}</DivStar>
          <PTitle>Contact Form</PTitle>
        <DivStar>{Thunder}{Thunder}{Thunder}</DivStar>
      </DivFormTitle>

      <FormStyled>
        <DivLabelInput>
          <LabelStyled>First Name:</LabelStyled>
          <InputStyled placeholder='John' onChange={nameInputChangeHandler} value={enteredName} type='text' />
          {!enteredNameIsValid && <p className='error-text'>Name must not be empty.</p>}
        </DivLabelInput>

        <DivLabelInput>
          <LabelStyled>Last Name:</LabelStyled>
          <InputStyled placeholder='Doe' onChange={lastInputChangeHandler} value={enteredLastName} type='text' />
          {!enteredNameIsValid ? <p className='error-text'>Name must not be empty.</p> : ''}
        </DivLabelInput>

        <DivLabelInput>
          <LabelStyled>Email:</LabelStyled>
          <InputStyled placeholder='john.doe@example.com' onChange={emailInputChangeHandler} value={enteredEmail} type='email' />
          {!enteredNameIsValid ? <p className='error-text'>Email must not be empty.</p> : ''}
        </DivLabelInput>

        <DivLabelTextArea>
          <LabelStyledInquiry>Inquiry:</LabelStyledInquiry>
          <TextAreaStyled placeholder='Type your question!' />
        </DivLabelTextArea>

        <DivButton>
          <BtnStyled>Submit</BtnStyled>
          <BtnStyled onClick={formClearHandle}>Clear</BtnStyled>
        </DivButton>

      </FormStyled>
    </DivForm>
  )
}

export default Form

// Container of the component
const DivForm = styled.div`
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
    width: 45vw;
    height: auto;
    border: solid black 2px;
    border-radius: 20px;
    margin: 8vh 0 8vh 0;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
`

// This is the container containing the stars
const DivStar = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    gap: 2vw;
    width: 30vw;
    height: auto;
    padding: 1vh 0 1vh 0;
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    gap: 2vw;
    width: 15vw;
    height: auto;
    padding: 1vh 0 1vh 0;
  }
`

// This is the title
const PTitle = styled.p`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    text-align: center;
    font-weight: bold;
    font-size: 1.4rem;
    width: 30vw;
    height: auto;
    padding: 1vh 0 1vh 0;
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    text-align: center;
    font-weight: bold;
    font-size: 1.4rem;
    width: 15vw;
    height: auto;
    padding: 1vh 0 1vh 0;
  }
`

// Styling for the container including the title
const DivFormTitle = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    width: 90vw;
    height: auto;
    padding: 1vh 0 1vh 0;
    border-bottom: solid #000 1px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-image: linear-gradient(to right, #bdc3c7, #2c3e50);
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    width: 44.8vw;
    height: auto;
    padding: 1vh 0 1vh 0;
    border-bottom: solid #000 1px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-image: linear-gradient(to right, #bdc3c7, #2c3e50);
  }
`


const FormStyled = styled.form`
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    padding: 1vh 0 1vh 0;
    width: 90vw;
    height: auto;
  }

  @media (min-width: 801px) {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    padding: 1vh 0 1vh 0;
    width: 30vw;
    height: auto;
  }
`



// Container including the label and input
const DivLabelInput = styled.div`
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: row;
    padding: 1vh 0 1vh 0;
    width: 90vw;
    height: auto;
  }

  @media (min-width: 801px) {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: row;
    padding: 1vh 0 1vh 0;
    width: 45vw;
    height: auto;
  }
`




// Styling for the label
const LabelStyled = styled.label`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-content: center;
    text-align: center;
    width: 30vw;
    height: auto;
    padding: 1vh 2vw 1vh 0;
    font-weight: bold;
    font-size: 1.2rem;
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-content: center;
    text-align: center;
    width: 14vw;
    height: auto;
    padding: 1vh 2vw 1vh 0;
    font-weight: bold;
    font-size: 1rem;
  }
`

// Styling for the input
const InputStyled = styled.input`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    width: 50vw;
    height: auto;
    padding: 1vh 1vw 1vh 1vw;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 8px;
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    width: 28vw;
    height: auto;
    padding: 1vh 1vw 1vh 1vw;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 8px;
  }
`

// This is the container including the label and Textarea
const DivLabelTextArea = styled.div`
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    padding: 1vh 0 1vh 0;
    width: 90vw;
    height: auto;
  }

  @media (min-width: 801px) {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    padding: 1vh 0 1vh 0;
    width: 45vw;
    height: auto;
  }
`

const LabelStyledInquiry = styled.label`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-content: center;
    text-align: center;
    width: 35vw;
    height: auto;
    padding: 1vh 2vw 1vh 0;
    font-weight: bold;
    font-size: 1.2rem;
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-content: center;
    text-align: center;
    width: 15.5vw;
    height: auto;
    padding: 1vh 2vw 1vh 0;
    font-weight: bold;
    font-size: 1rem;
  }
`

// Styling for the text area
const TextAreaStyled = styled.textarea`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-self: center;
    width: 86vw;
    height: auto;
    padding: 1vh 1vw 1vh 1vw;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 8px;
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-self: center;
    width: 38vw;
    height: auto;
    padding: 1vh 1vw 1vh 1vw;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 8px;
  }
`

// Styling for the container that includes the buttons
const DivButton = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    width: 89.5vw;
    height: auto;
    padding: 4vh 0 2vh 0;
    border-top: solid #000 1px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    width: 44.5vw;
    height: auto;
    padding: 4vh 0 2vh 0;
    border-top: solid #000 1px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`

// Styling of the buttons
const BtnStyled = styled.button`
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 15vw;
    height: auto;
    padding: 2vh 0 2vh 0;
    border-radius: 16px;
    font-weight: bold;
    font-size: 1.2rem;
    color: #fff;
    background-image: linear-gradient(to right, #bdc3c7, #2c3e50);
  }

  @media (min-width: 801px) {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 14vw;
    height: auto;
    padding: 2vh 0 2vh 0;
    border-radius: 16px;
    font-weight: bold;
    font-size: 1.2rem;
    color: #fff;
    background-image: linear-gradient(to right, #bdc3c7, #2c3e50);
  }
`