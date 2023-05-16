import React from "react";
import { useParams, Navigate } from "react-router-dom";
import houses from '../houses.json'
import styled from 'styled-components'
import colors from '../utils/colors';
import fullStar from "../assets/fullStar.png";
import star from "../assets/star.png";
import CollapseComponent from "../components/Collapse";
import Carousel from "../components/Carousel";

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
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    margin-top: 16px;
  }
`;

function House() {
  const { id } = useParams();
  const house = houses.find((house) => house.id === id);

  if (!house) {
    return <Navigate to="/404" />;
  }

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
      <Carousel images={house.pictures}/>
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
        <CollapseComponent titles="Description" contents={house.description}/>
        <CollapseComponent titles="Équipements" contents={house.equipments}/>
      </HouseCollapseContainer>
    </div>
  );
}

export default House;
