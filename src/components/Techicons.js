import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs, faReact, faGithub } from '@fortawesome/free-brands-svg-icons'

const Techicons = () => {
  return (
    <TECHCNTR>
      <DIVCNTR>
        <FontAwesomeIcon icon={faHtml5} size="2xl" beat style={{color: "#fff", }} />
        <FontAwesomeIcon icon={faCss3} size="2xl" beat style={{color: "#fff", }} />
        <FontAwesomeIcon icon={faJs} size="2xl" beat style={{color: "#fff", }} />
        <FontAwesomeIcon icon={faReact} size="2xl" beat style={{color: "#fff", }} />
        <FontAwesomeIcon icon={faGithub} size="2xl" beat style={{color: "#fff", }} />
      </DIVCNTR>
    </TECHCNTR>
  )
}

export default Techicons

// This is this is the whole component
const TECHCNTR = styled.div`
  width: 100vw;
  height: 14vh;
  background-image: linear-gradient(to right, #000000, #434343);
  display: flex;
  justify-content: center;
  align-items: center;
`

// This is the container container the icons
const DIVCNTR = styled.div`
  width: 60vw;
  justify-content: space-around;
  display: flex;
`