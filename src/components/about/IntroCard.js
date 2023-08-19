import React from 'react'
import styled from 'styled-components'

const IntroCard = () => {
  return (
      <DivIntroCard>
        <H1>Olivier Donze</H1>
        <P1>Full-stack web developer. When not coding, I like walking the dog, and hiking.</P1>
      </DivIntroCard>
  )
}

export default IntroCard

const DivIntroCard = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 90vw;
    height: auto;
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 40vw;
    height: auto;
  }
`

const H1 = styled.h1`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    width: 90vw;
    height: auto;
    font-size: 3.5rem;
    padding: 4vh 0 4vh 0;
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    width: 40vw;
    height: auto;
    font-size: 2.5rem;
    padding: 4vh 0 4vh 0;
  }
`

const P1 = styled.p`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    width: 90vw;
    height: auto;
    font-size: 2rem;
    padding: 0 0 4vh 0;
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    width: 40vw;
    height: auto;
    font-size: 1.2rem;
    padding: 0 0 4vh 0;
  }
`
