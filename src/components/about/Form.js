import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'

const Thunder = <FontAwesomeIcon icon={faBolt} style={{ color: "yellow", }} size="xs" />

const Form = () => {
  const [user, setUser] = useState({ inquiries: [] });
  const [showError, setShowError] = useState({ status: 0, fieldIdInError: '', errorMessage: '' });

  const questionIndex = useRef(0);

  // This reset an eventual error message when pressing Clear after Submit
  useEffect(() => {
      return;
    }, [showError]);

  const loginUser = JSON.parse(sessionStorage.getItem('loginUser'));

  const handleChange = (ev) => {
    setUser({
      ...user,
      [ev.target.id]: ev.target.value
    });
    setShowError(0);
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();

    let inError = false;

    const fnameLength = document.getElementById('fname').value.length;
    if (fnameLength < 2) {
      setShowError({ status: 1, fieldIdInError: 'fname', errorMessage: 'The first name with at least 2 characters is required!' });
      inError = true;
      return false;
    }

    const lnameLength = document.getElementById('lname').value.length;
    if (lnameLength < 2) {
      setShowError({ status: 1, fieldIdInError: 'lname', errorMessage: 'The last name with at least 2 characters is required!' });
      inError = true;
      return false;
    }

    const emailLength = document.getElementById('email').value.length;
    if (emailLength < 5) {
      setShowError({ status: 1, fieldIdInError: 'email', errorMessage: 'I never see so small email address!' });
      inError = true;
      return false;
    }

    const question = document.getElementById('question').value.trim();
    if (question.length > 0 && question.split(' ').length < 3) {
      setShowError({ status: 1, fieldIdInError: 'question', errorMessage: 'Your question should have at least 3 words!' });
      inError = true;
      return false;
    }

    if (question.length > 0) {
      if (questionIndex.current > 4) {
        setShowError({ status: 1, fieldIdInError: 'question', errorMessage: 'Too many questions!' });
        inError = true;
      }

      if (inError) {
        return false;
      }

      let inquiries = [];
      if (user.inquiries !== undefined) inquiries = user.inquiries;
      inquiries.push(question);
      setUser({ ...user, inquiries: inquiries });

      questionIndex.current += 1;

    }

    if (!inError) {
      setUser({
        ...user,
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        email: document.getElementById('email').value
      });
      setShowError({ status: 0, fieldIdInError: '', errorMessage: '' });
      if (questionIndex.current > 0) {
        window.alert(`Your question will receive an answer in the 2 next days!`);
      } else {
        window.alert(`Hi ${document.getElementById('fname').value}! Add your question!`);
      }
      return true;
    }
  }

  const handleReset = event => {
    setUser({ inquiries: [] });
    setShowError({ status: false, fieldIdInError: '', errorMessage: '' });
    questionIndex.current = 0;
  }

  return (
    <DivForm onSubmit={handleSubmit} onReset={handleReset}>

      <DivFormTitle>
        <DivStar>{Thunder}{Thunder}{Thunder}</DivStar>
        <PTitle>Contact Form</PTitle>
        <DivStar>{Thunder}{Thunder}{Thunder}</DivStar>
      </DivFormTitle>

      <FormStyled>
        <DivLabelInput>
          <DivLabelAndInput>
            <LabelStyled>First Name:</LabelStyled>
            <InputStyled id='fname' placeholder='John' onChange={handleChange} type='text' required minLength='2' />
          </DivLabelAndInput>
          <DivError>
            {(showError.status && showError.fieldIdInError === 'fname') ? <PError className='error-text'>{showError.errorMessage}</PError> : ''}
          </DivError>
        </DivLabelInput>

        <DivLabelInput>
          <DivLabelAndInput>
            <LabelStyled>Last Name:</LabelStyled>
            <InputStyled id='lname' placeholder='Doe' onChange={handleChange} type='text' required minLength='2' />
          </DivLabelAndInput>
          <DivError>
            {(showError.status && showError.fieldIdInError === 'lname') ? <PError className='error-text'>{showError.errorMessage}</PError> : ''}
          </DivError>
        </DivLabelInput>

        <DivLabelInput>
          <DivLabelAndInput>
            <LabelStyled>Email:</LabelStyled>
            <InputStyled id='email' placeholder='john.doe@example.com' onChange={handleChange} type='email' />
          </DivLabelAndInput>
          <DivError>
            {(showError.status && showError.fieldIdInError === 'email') ? <PError className='error-text'>{showError.errorMessage}</PError> : ''}
          </DivError>
        </DivLabelInput>

        <DivLabelTextArea>
        <DivLabelAndInput>
            <LabelStyledInquiry>Inquiry:</LabelStyledInquiry>
            <TextAreaStyled id='question' placeholder='Type your question!' />
          </DivLabelAndInput>
          <DivError>
            {(showError.status && showError.fieldIdInError === 'question') ? <PError className='error-text'>{showError.errorMessage}</PError> : ''}
          </DivError>
        </DivLabelTextArea>

        <DivButton>
          <BtnStyled type='submit'>Submit</BtnStyled>
          <BtnStyled type='reset' onReset={handleReset}>Clear</BtnStyled>
        </DivButton>

      </FormStyled>
    </DivForm>
  )
}

export default Form

// Container of the component
const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border: solid black 2px;
  height: auto;
  margin: 8vh 0 8vh 0;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  
  @media (max-width: 800px) {
    width: 90vw;
  }

  @media (min-width: 801px) {
    width: 45vw;
  }
`

// This is the container containing the stars
const DivStar = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 2vw;
  height: auto;
  padding: 1vh 0 1vh 0;

  @media (max-width: 800px) {
    width: 30vw;
  }

  @media (min-width: 801px) {
    width: 15vw;
  }
`

// This is the title
const PTitle = styled.p`
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
  height: auto;
  padding: 1vh 0 1vh 0;

  @media (max-width: 800px) {
    width: 30vw;
  }

  @media (min-width: 801px) {
    width: 15vw;
  }
`

// Styling for the container including the title
const DivFormTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  height: auto;
  padding: 1vh 0 1vh 0;
  border-bottom: solid #000 1px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-image: linear-gradient(to right, #bdc3c7, #2c3e50);

  @media (max-width: 800px) {
    width: 90vw;
  }

  @media (min-width: 801px) {
    width: 44.8vw;
  }
`

const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding: 1vh 0 1vh 0;
  height: auto;

  @media (max-width: 800px) {
    width: 90vw;
  }

  @media (min-width: 801px) {
    width: 30vw;
  }
`

// Container including the label and input and error message
const DivLabelInput = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding: 1vh 0 1vh 0;
  height: auto;

  @media (max-width: 800px) {
    width: 90vw;
  }

  @media (min-width: 801px) {
    width: 45vw;
  }
`

// Container with only the label and input
const DivLabelAndInput = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  padding: 1vh 0 1vh 0;
  height: auto;
`

// This is the container with the error message
const DivError = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
  padding: 1vh 0 1vh 0;
  height: auto;
  border-radius: 10px;

  @media (max-width: 800px) {
    width: 90vw;
  }

  @media (min-width: 801px) {
    width: 44.8vw;
  }
`

// Styling the error message
const PError = styled.p`
  color: #fff;
  font-weight: bold;
  background-color: #cb2d3e;
  padding: 1vh 0 1vh 0;
  border-radius: 10px;
`

// Styling for the label
const LabelStyled = styled.label`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  text-align: center;
  height: auto;
  padding: 1vh 2vw 1vh 0;
  font-weight: bold;

  @media (max-width: 800px) {
    width: 30vw;
    font-size: 1.2rem;
  }

  @media (min-width: 801px) {
    width: 14vw;
    font-size: 1rem;
  }
`

// Styling for the input
const InputStyled = styled.input`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-content: center;
  height: auto;
  padding: 1vh 1vw 1vh 1vw;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 8px;

  @media (max-width: 800px) {
    width: 50vw;
  }

  @media (min-width: 801px) {
    width: 28vw;
  }
`

// This is the container including the label and Textarea
const DivLabelTextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 1vh 0 1vh 0;
  height: auto;
  
  @media (max-width: 800px) {
    width: 90vw;
  }

  @media (min-width: 801px) {
    width: 45vw;
  }
`

const LabelStyledInquiry = styled.label`
  display: flex;
  justify-content: center;
  align-self: center;
  text-align: center;
  height: auto;
  padding: 1vh 2vw 1vh 2vw;
  font-weight: bold;
  
  @media (max-width: 800px) {
    width: auto;
    font-size: 1.2rem;
  }

  @media (min-width: 801px) {
    width: auto;
    font-size: 1rem;
  }
`

// Styling for the text area
const TextAreaStyled = styled.textarea`
  display: flex;
  justify-content: center;
  align-content: center;
  align-self: center;
  height: auto;
  padding: 1vh 1vw 1vh 1vw;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 8px;

  @media (max-width: 800px) {
    max-width: 72vw;
    min-width: 66vw;
  }

  @media (min-width: 801px) {
    max-width: 36vw;
    min-width: 32vw;
  }
`

// Styling for the container that includes the buttons
const DivButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  height: auto;
  margin-bottom: -1vh;
  padding: 4vh 0 2vh 0;
  border-top: solid #000 1px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-image: linear-gradient(to right, #bdc3c7, #2c3e50);
  
  @media (max-width: 800px) {
    width: 89.5vw;
  }

  @media (min-width: 801px) {
    width: 44.8vw;
  }
`

// Styling of the buttons
const BtnStyled = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  height: auto;
  padding: 2vh 0 2vh 0;
  border-radius: 16px;
  font-weight: bold;
  font-size: 1.2rem;
  color: #fff;
  background-image: linear-gradient(to right, #bdc3c7, #2c3e50);
  cursor: pointer;
  &:hover {
    background: linear-gradient(to right, #C04848, #480048);
  }


  @media (max-width: 800px) {
    width: 15vw;
  }

  @media (min-width: 801px) {
    width: 14vw;
  }
`