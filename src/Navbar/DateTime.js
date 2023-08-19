import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000)
    return(
        function cleanup() {
          clearInterval(timer)
        }
    )
  }, [])

  return(
    <DIV1>
      <div><P1><SpanStyled>Time: </SpanStyled>{date.toLocaleTimeString()}</P1></div>
      <div><P2><SpanStyled>Date: </SpanStyled>{date.toLocaleDateString()}</P2></div>
    </DIV1>
  )

}

export default DateTime

// Container including both the Time and Day
const DIV1 = styled.div`
  display: flex;
  align-items: center;
  border: solid black 1px;
  border-radius: 50px;
  gap: 10px;
  padding: 4px 4px 4px 4px;
  margin: 0 0 0 10px;
  background-image: linear-gradient(to right, #108dc7    , #ef8e38);
  height: 6vh;

  @media (max-height: 650px) and (max-width: 600px) {
    font-size: 1rem;
    height: 10vh;
  }
`

// Time
const P1 = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  @media (max-width: 800px) {
    flex-direction: column;
    width: 140px;
  }

  @media (min-width: 801px) {
    flex-direction: row;
    width: 160px;
  }
`

// Day
const P2 = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  @media (max-width: 800px) {
    flex-direction: column;
    width: 140px;
  }

  @media (min-width: 801px) {
    flex-direction: row;
    width: 140px;
  }
`

// SPAN Time
const SpanStyled = styled.span`
  font-weight: bold;
`
