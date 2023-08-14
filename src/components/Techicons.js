import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs, faReact, faGithub } from '@fortawesome/free-brands-svg-icons'

const Techicons = () => {
  return (
    <TechIconsCntr>
      <DivIconsCntr>
        <FontAwesomeIcon icon={faHtml5} size="2xl" style={{color: "#fff", }} />
        <FontAwesomeIcon icon={faCss3} size="2xl" style={{color: "#fff", }} />
        <FontAwesomeIcon icon={faJs} size="2xl" style={{color: "#fff", }} />
        <FontAwesomeIcon icon={faReact} size="2xl" style={{color: "#fff", }} />
        <FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#fff", }} />
      </DivIconsCntr>
    </TechIconsCntr>
  )
}

export default Techicons

// This is this is the whole component
const TechIconsCntr = styled.div`
  @media (max-width: 800px) {
    width: 100vw;
    height: 14vh;
    background-image: linear-gradient(to right, #000000, #434343);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-bottom: solid #000 1px;
  }

  @media (min-width: 801px) {
    width: 100vw;
    height: 14vh;
    background-image: linear-gradient(to right, #000000, #434343);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-bottom: solid #000 1px;
  }
`

// This is the container container the icons
const DivIconsCntr = styled.div`
  width: 60vw;
  justify-content: space-around;
  display: flex;
`