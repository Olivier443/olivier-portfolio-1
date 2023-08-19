import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { SliderData } from './SliderData';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Display only one image instead of displaying all of them at the same time
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <SliderSection>

      <DivCarousel>

        <DivH1Title>
          <h1>Projects!</h1>
        </DivH1Title>

        <DivArrows>
          <StyledFaArrowAltCircleLeft onClick={prevSlide} />
          <StyledFaArrowAltCircleRight onClick={nextSlide} />
        </DivArrows>

        {SliderData.map((slide, index) => {
          return (
            <DivSlide key={slide.id}>
              {index === current && (
                <div>
                  <IMG src={slide.image} alt='image of a project' />
                  <DivInfo>
                    <TitleNavLink to='/' style={{ textDecoration: 'none' }}>{slide.title}</TitleNavLink>
                    <PTitle>{slide.description}</PTitle>
                  </DivInfo>
                </div>
              )}
            </DivSlide>
          );
        })}

        <DivDots>
          {SliderData.map((slide, index) => (
            <Dot key={index} onClick={() =>
              setCurrent(SliderData.indexOf(slide))}
              active={index === current ? 1 : 0}>
            </Dot>
          ))}
        </DivDots>

      </DivCarousel>

    </SliderSection>
  );
};

export default Carousel;

// This is the component including the carousel
const SliderSection = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(to right, #000046, #1CB5E0);
  color: #fff;
  margin-top: 8vh;

  @media (max-width: 662px) {
    height: 120vh;
  }

  @media (max-height: 500px) {
    height: 124vh;
  }
`;

// Container containing the carousel
const DivCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  @media (max-width: 500px) {
    margin-top: 4vh;
  }
`

const DivH1Title = styled.div`
  display: flex;
  justify-content: center;
`

const DivSlide = styled.div`
  display: flex;
  justify-content: center;
`

const IMG = styled.img`
  width: 50vw;
  // height: auto;
  max-height: 60vh;
  display: flex;
  margin-top: 2vh;
  border-radius: 20px;
  object-fit: cover;
`;

const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const TitleNavLink = styled(NavLink)`
  width: 50vw;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: larger;
  color: #fff;
  background-image: linear-gradient(to right, #000428, #004e92);
  border-radius: 10px;
  margin-top: 2vh;
`;

const PTitle = styled.p`
  width: 50vw;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: larger;
  background-image: linear-gradient(to right, #000428, #004e92);
  border-radius: 10px;
  margin: 2vh 0 2vh 0;

  @media (max-width: 661px) {
    padding: 0 1.5vw 0 1.5vw;
  }

  @media (max-width: 542px) {
    padding: 0 4vw 0 8vw;
  }
`;

const DivArrows = styled.div`
  width: 80vw;
  height: 11vh;
  display: flex;
  align-items: center;
  position: relative;
  top: 34vh;
`

const StyledFaArrowAltCircleLeft = styled(FaArrowAltCircleLeft)`
  display: flex;
  position: absolute;
  left: 4vw;
  font-size: 3rem;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

const StyledFaArrowAltCircleRight = styled(FaArrowAltCircleRight)`
  display: flex;
  position: absolute;
  right: 4vw;
  font-size: 3rem;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

// This is for the container containing the dots
const DivDots = styled.div`
  display: flex;
  align-self: center;
  gap: 10px;
`;

const Dot = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#fff" : "#000")};
  margin: 0 5px;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
}
`;
