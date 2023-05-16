import React, { useState } from "react";
import styled from 'styled-components'
import colors from '../utils/colors';
import leftArrow from '../assets/leftArrow.png'
import rightArrow from '../assets/rightArrow.png'

const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  border-radius: 25px;
  height: 415px;
  overflow: hidden;
  @media (max-width: 1024px) {
    height: 255px;
  }
  @media (max-width: 768px) {
  }
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
`;

const LeftArrow = styled.img`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 3%;
  cursor: pointer;
  @media (max-width: 1024px) {
    height: 50px;
  }
  @media (max-width: 768px) {
    height: 20px;
  }
`;

const RightArrow = styled.img`
  position: absolute;
  top: 50%;
  right: 3%;
  transform: translateY(-50%);
  cursor: pointer;
  @media (max-width: 1024px) {
    height: 50px;
  }
  @media (max-width: 768px) {
    height: 20px;
  }
`;

const Number = styled.p`
  color: ${colors.white};
  font-size: 18px;
  font-weight: 500;
  position: absolute;
  top: 88%;
  @media (max-width: 1024px) {
    top: 82%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

function Carousel({images}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handlePrevImage = () => {
    if (currentImageIndex < 1) return setCurrentImageIndex(images.length - 1);
    setCurrentImageIndex(currentImageIndex - 1);
  };

  const handleNextImage = () => {
    if (images.length - 1 === currentImageIndex) return setCurrentImageIndex(0);
    setCurrentImageIndex(currentImageIndex + 1);
  };
  return (
    <CarouselContainer>
      {images.length !== 1 &&<LeftArrow src={leftArrow} alt="left arrow" onClick={handlePrevImage}/>}
      <Img src={images[currentImageIndex]} alt='Carousel image'/>
      {images.length !== 1 &&<Number>{currentImageIndex+1}/{images.length}</Number>}
      {images.length !== 1 &&<RightArrow src={rightArrow} alt="right arrow" onClick={handleNextImage}/>}
    </CarouselContainer>
  )
}

export default Carousel
