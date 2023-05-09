import styled from 'styled-components'
import colors from '../utils/colors';
import houses from '../houses.json'
import { Link } from 'react-router-dom'

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px;
  justify-content: center;
  align-items: center;
  margin-top: 43px;
  background-color: ${colors.grey};
  border-radius: 25px;
  padding: 56px 50px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    background-color: ${colors.white};
    margin-top: 20px;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
const Card = styled.div`
  width: 100%;
  height: 340px;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
  @media (max-width: 1024px) {
    height: 255px;
  }
  @media (max-width: 768px) {
  }
`;
const Img = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
const P = styled.p`
  color: ${colors.white};
  font-size: 18px;
  font-weight: 500;
  position: absolute;
  bottom: 0;
  left: 20px;
  z-index: 2;
`;
const Filter = styled.div`
  height: 100%;
  width: 100%;
  z-index: 1;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
  position: absolute;
`;

function Cards() {
    return (
      <div>
        <CardsContainer>
          {houses.map((house) => (
            <Link key={`house_${house.id}`} to={`/house/${house.id}`}>
              <Card>
                <Filter />
                <Img src={house.pictures[0]} alt={house.title}/>
                <P>{house.title}</P>
              </Card>
            </Link>
          ))}
        </CardsContainer>
      </div>
    )
}

export default Cards
