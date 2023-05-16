import React, {useState} from "react";
import styled from 'styled-components'
import colors from '../utils/colors';
import Chevron from '../assets/chevron.svg'

const CollapseContainer = styled.div`
  width: 100%;
  margin: 30px auto;
  gap: 30px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const CollapseDiv = styled.div`
  background-color: ${colors.grey};
  border-radius: 5px;
  width: 100%;
`;

const CollapseTitle = styled.div`
  height: 47px;
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

const CollapseContent = styled.p`
  color: ${colors.pink};
  padding: 18px;
  margin: 0;
  font-size: 20px;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
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
  font-size: 20px;
  color: ${colors.pink};
  padding-left: 18px;
`;

function CollapseComponent({titles, contents}) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
      <CollapseContainer>
        <>
          {Array.isArray(titles) ? (
          titles.map((title, index) =>
          <CollapseDiv onClick={() => handleCollapse(index)} key={title}>
            <CollapseTitle>{title}<ChevronIcon up={openIndex === index} src={Chevron} alt="chevron" /></CollapseTitle>
            {openIndex === index && <CollapseContent>{contents[openIndex]}</CollapseContent>}
          </CollapseDiv>
          ))
          : (
            <CollapseDiv onClick={() => handleCollapse('oneCollapse')} key={titles}>
            <CollapseTitle>{titles}<ChevronIcon up={openIndex} src={Chevron} alt="chevron" /></CollapseTitle>
            {openIndex === 'oneCollapse' && (
              Array.isArray(contents) ? (
              <Ul>
                {contents.map((equipment) => (
                  <li key={`equipment_${equipment}`}>{equipment}</li>
                ))}
              </Ul>
              ) : (
                <CollapseContent>{contents}</CollapseContent>
              )
            )}
          </CollapseDiv>
          )}
        </>
      </CollapseContainer>

  )
}

export default CollapseComponent
