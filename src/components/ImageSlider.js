import React, { useState } from 'react'

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { SliderData } from './SliderData';
import styled from 'styled-components'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length // slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  // Display only one image instead of displaying all of them at the same time
  if(!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <SliderSection className='slider'>
      <StyledFaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <StyledFaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return(
            <div key={index}>
              {index === current && (
                <IMG src={slide.image} alt='image of a robot' />
              )}
            </div>
          )
        })}
    </SliderSection>
  )
}

export default ImageSlider

const SliderSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const IMG = styled.img`
  width: 1000px;
  height: 600px;
  border-radius: 10px;
`

const StyledFaArrowAltCircleLeft = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top: 50%;
  left: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`

const StyledFaArrowAltCircleRight = styled(FaArrowAltCircleRight)`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`


