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
      <P1><SPAN1>Time: </SPAN1>{date.toLocaleTimeString()}</P1>
      <P1><SPAN1>Date: </SPAN1>{date.toLocaleDateString()}</P1>
    </DIV1>
  )

}

export default DateTime

const DIV1 = styled.div`
  display: flex;
  border: solid black 1px;
  max-width: 20vw;
  margin-left: 1vw;
  height: 4vh;
  border-radius: 50px;
  justify-content: space-around;
  align-self: center;
  gap: 10px;
  padding-left: 0.5vw;
  padding-right: 0.5vw;
  background-image: linear-gradient(to right, #108dc7    , #ef8e38);

  @media (max-width: 280px) {
    flex-direction: column;
    min-width: 70vw;
    height: 10vh;
    margin-left: 4vw;
  }
`

const SPAN1 = styled.span`
  font-weight: bold;
`

const P1 = styled.span`
  align-self: center;
`