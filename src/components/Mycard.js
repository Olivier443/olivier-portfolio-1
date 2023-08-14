import React from 'react'
import styled from 'styled-components'
import robot from '../assets/robot.jpg'
import IntroCard from './IntroCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs, faReact, faGithub } from '@fortawesome/free-brands-svg-icons'


const skills = [
  {
    skill: 'HTML + CSS',
    color: "blue",
  },
  {
    skill: 'JavaScript',
    color: "yellow",
  },
  {
    skill: 'React',
    color: "aqua",
  },
  {
    skill: 'Style-Components',
    color: "green",
  },
  {
    skill: 'GitHub',
    color: 'grey',
  },
]

const ProfilePic = () => {
  return (
    <ImgPic src={robot} alt='picture of Olivier Donze' />
  )
}

const SkillList = () => {
  return (
    <DivSkillsCntr>
      {skills.map((skill) => (
        <Skill key={skill.skill} skill={skill.skill} color={skill.color} />
      ))}
    </DivSkillsCntr>
  )
}

const Skill = ({ skill, color }) => {
  return (
    <DivOneSkill style={{ backgroundColor: color }}>
      <span>{skill}</span>
    </DivOneSkill>
  )
}

const Mycard = () => {
  return (
    <DivCard>
      
      <DivIcons>
          <div>
            <FontAwesomeIcon icon={faHtml5} size="2xl" beat style={{color: "#274046", }} />
          </div>
          <div>
            <FontAwesomeIcon icon={faCss3} size="2xl" beatFade style={{color: "#274046", }} />
          </div>
          <div>
            <FontAwesomeIcon icon={faJs} size="2xl" flip style={{color: "#274046", }} />
          </div>
          <div>
            <FontAwesomeIcon icon={faReact} size="2xl" shake style={{color: "#274046", }} />
          </div>
          <div>
            <FontAwesomeIcon icon={faGithub} size="2xl" spin style={{color: "#274046", }} />
          </div>
      </DivIcons>
      
      <DivPic>
        <ProfilePic />
      </DivPic>

      <DivText>
        <IntroCard />
      </DivText>

      <DivSkills>
        <SkillList />
      </DivSkills>

    </DivCard>
  )
}

export default Mycard


// Whole component
const DivCard = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 90vw;
    height: auto;
    border: solid black 2px;
    border-radius: 20px;
    margin: 8vh 0 0 0;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 40vw;
    height: auto;
    border: solid black 2px;
    border-radius: 20px;
    margin: 12vh 0 8vh 0;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
`

// Component part for the icons
const DivIcons = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    width: 90vw;
    height: auto;
    padding: 2vh 0 2vh 0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  @media (min-width: 801px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    width: 40vw;
    height: auto;
    padding: 2vh 0 2vh 0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`

// Component part for the image
const DivPic = styled.div`
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

const ImgPic = styled.img`
  @media (max-width: 800px) {
    width: 90vw;
    height: auto;
  }

  @media (min-width: 801px) {
    width: 40vw;
    height: auto;
  }
`

// Component part for the text
const DivText = styled.div`
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

// Component part for the skills
const DivSkills = styled.div`
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    width: 90vw;
    height: auto;
    padding: 0 0 4vh 0;
  }

  @media (min-width: 801px) {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    width: 40vw;
    height: auto;
    padding: 0 0 2vh 0;
  }
`

const DivSkillsCntr = styled.div`
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    width: 90vw;
    height: auto;
    padding: 1vh 1vw 1vh 1vw;
    row-gap: 4vw;
    column-gap: 4vh;
  }

  @media (min-width: 801px) {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    width: 40vw;
    height: auto;
    padding: 1vh 1vw 1vh 1vw;
    row-gap: 2vw;
    column-gap: 2vh;
  }
`

const DivOneSkill = styled.div`
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    height: auto;
    padding: 2vh 2vw 2vh 2vw;
    border-radius: 10px;
    font-size: 1.8rem;
    font-weight: bold;
  }

  @media (min-width: 801px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    height: auto;
    padding: 2vh 2vw 2vh 2vw;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: bold;
  }
`
