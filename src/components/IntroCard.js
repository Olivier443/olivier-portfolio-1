import React from 'react'
import styled from 'styled-components'

const IntroCard = () => {
  return (
      <DIV>
        <H1>Olivier Donze</H1>
        <p>Full-stack web developer. When not coding, I like walking the dog, and hiking.</p>
      </DIV>
  )
}

export default IntroCard

const DIV = styled.div`
  width: 28vw;
  margin-left: 1vw;
`

const H1 = styled.h1`
  font-weight: bold;
  height: 2vh;
`
