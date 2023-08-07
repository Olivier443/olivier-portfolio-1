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
    <IMG0 src={robot} alt='picture of Olivier Donze' />
  )
}

const SkillList = () => {
  return (
    <DIV1>
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} />
      ))}
    </DIV1>
  )
}

const Skill = ({ skill, color }) => {
  return (
    <DIV2 style={{ backgroundColor: color }}>
      <span>{skill} {color}</span>
    </DIV2>
  )
}

const Mycard = () => {
  return (
    <DIVCARD>
      
      <DIVICONS>
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
      </DIVICONS>
      
      <DIVPIC>
        <ProfilePic />
      </DIVPIC>

      <DIVTEXT>
        <IntroCard />
      </DIVTEXT>

      <DIVSKILLS>
        <SkillList />
      </DIVSKILLS>

    </DIVCARD>
  )
}

export default Mycard

// Whole component
const DIVCARD = styled.div`
  background-image: linear-gradient(to right, #076585, #fff);
  border: solid black 2px;
  height: 80vh;
  border-radius: 20px;
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`

// Component part for the icons
const DIVICONS = styled.div`
  display: flex;
  justify-content: space-around;
  background-image: linear-gradient(to right, #076585    , #fff);
  height: 6vh;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
`

// Component part for the image
const DIVPIC = styled.div`
  display: flex;
  justify-content: space-around;
  align-self: center;
  gap: 3vw;
  // width: 60vw;
`

const IMG0 = styled.img`
  display: flex;
  height: 30vh;
  width: 30vw;
  height: auto;
`

// Component part for the text
const DIVTEXT = styled.div`
  display: flex;
  flex-wrap: wrap;
`

// Component part for the skills
const DIVSKILLS = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-self: center;
  gap: 30px;
`

const DIV1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 2vh;
`

const DIV2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  padding: 8px;
  display: flex;
  align-items: center;
`


