import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import houses from '../houses.json'
import styled from 'styled-components'
import colors from '../utils/colors';
import leftArrow from '../assets/leftArrow.png'
import rightArrow from '../assets/rightArrow.png'
import chevron from "../assets/chevron.svg";
import fullStar from "../assets/fullStar.png";
import star from "../assets/star.png";

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

const InfosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.pink};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TitleContainer = styled.div`
  margin-top: 30px;
  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;
const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
const Locality = styled.p`
  font-size: 18px;
  margin: 5px 0 20px 0;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 14px;
    margin: 5px 0 10px 0;
  }
`;
const TagContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const Tag = styled.div`
  font-size: 14px;
  background-color: ${colors.pink};
  border-radius: 10px;
  padding: 5px 30px;
  color: ${colors.white};
  @media (max-width: 768px) {
    font-size: 10px;
    padding: 3px 15px;
  }
`;

const HostAndStars = styled.div`
  margin-top: 23px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
  }
`;
const HostContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 27px;
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;
const Host = styled.p`
  text-align: end;
  font-size: 18px;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: contain;
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
const Stars = styled.div`
  display: flex;
  gap: 15px;
  @media (max-width: 768px) {
    gap: 6px;
  }
`;
const Star = styled.img`
  width: 24px;
  height: 24px;
  @media (max-width: 768px) {
    width: 13px;
    height: 13px;
  }
`;

const HouseCollapseContainer = styled.div`
  gap: 76px;
  display: flex;
  margin-top: 24px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    margin-top: 16px;
  }
`;
const HouseCollapse = styled.div`
  border-radius: 5px;
  width: 100%;
`;
const HouseCollapseTitle = styled.div`
  height: 52px;
  background-color: ${colors.pink};
  color: ${colors.white};
  font-size: 24px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  border-radius: 5px;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 13px;
    height: 30px;
  }
`;
const HouseCollapseContent = styled.div`
  background-color: ${colors.grey};
  color: ${colors.pink};
  padding: 30px 20px;
  font-size: 18px;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 17px 11px;
  }
`;

const ChevronIcon = styled.img`
  ${({ up }) => up && 'transform: rotate(0.5turn);'}
  @media (max-width: 1024px) {
    width: 16px;
  }
`;
const Ul = styled.ul`
  list-style: none;
  padding:0;
  margin:0;
`;

function House() {
  const { id } = useParams();
  const house = houses.find((house) => house.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openDescription, setOpenDescription] = useState(true);
  const [openEquipments, setOpenEquipments] = useState(true);

  if (!house) {
    return <Navigate to="/404" />;
  }

  const handlePrevImage = () => {
    if (currentImageIndex < 1) return setCurrentImageIndex(house.pictures.length - 1);
    setCurrentImageIndex(currentImageIndex - 1);
  };

  const handleNextImage = () => {
    if (house.pictures.length - 1 === currentImageIndex) return setCurrentImageIndex(0);
    setCurrentImageIndex(currentImageIndex + 1);
  };

  const renderStarsRating = (rating) => {
    const maxRating = 5;
    const stars = [];

    for (let i = 0; i < maxRating; i++) {
      const oneFullStar = <Star key={`fullStars_${i}`} src={fullStar} alt="étoile pleine"/>;
      const oneEmptyStar = <Star key={`emptyStars_${i}`} src={star} alt="étoile vide"/>;

      if (i < rating) {
        stars.push(oneFullStar);
      } else {
        stars.push(oneEmptyStar);
      }
    }

    return stars;
  }

  return (
    <div key={`house_${id}`}>
      <CarouselContainer>
        {house.pictures.length !== 1 &&<LeftArrow src={leftArrow} alt="left arrow" onClick={handlePrevImage}/>}
        <Img src={house.pictures[currentImageIndex]} alt='Carousel image'/>
        {house.pictures.length !== 1 &&<Number>{currentImageIndex+1}/{house.pictures.length}</Number>}
        {house.pictures.length !== 1 &&<RightArrow src={rightArrow} alt="right arrow" onClick={handleNextImage}/>}
      </CarouselContainer>
      <InfosContainer>
        <TitleContainer>
          <Title>{house.title}</Title>
        <Locality>{house.location}</Locality>
        <TagContainer>
          {house.tags.map((tag) => (
            <Tag key={`tag_${tag}`}>{tag}</Tag>
            ))}
        </TagContainer>
        </TitleContainer>
        <HostAndStars>
        <HostContainer>
          <Host>{house.host.name}</Host>
          <Avatar src={house.host.picture}/>
          </HostContainer>
        <Stars>{renderStarsRating(house.rating)}</Stars>
        </HostAndStars>
      </InfosContainer>
      <HouseCollapseContainer>
        <HouseCollapse>
          <HouseCollapseTitle onClick={() => setOpenDescription(!openDescription)}>Description<ChevronIcon up={openDescription} src={chevron} alt="chevron" /></HouseCollapseTitle>
          {openDescription && <HouseCollapseContent>{house.description}</HouseCollapseContent>}
        </HouseCollapse>
        <HouseCollapse>
          <HouseCollapseTitle onClick={() => setOpenEquipments(!openEquipments)}>Équipements<ChevronIcon up={openEquipments} src={chevron} alt="chevron" /></HouseCollapseTitle>
            {openEquipments &&
              <HouseCollapseContent>
                <Ul>
                  {house.equipments.map((equipment) => (
                    <li key={`equipment_${equipment}`}>{equipment}</li>
                  ))}
                </Ul>
              </HouseCollapseContent>
            }
        </HouseCollapse>
      </HouseCollapseContainer>
    </div>
  );
}

export default House;
