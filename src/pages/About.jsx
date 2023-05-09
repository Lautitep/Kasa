// import '../styles/About.css'
import React, {useState} from "react";
import Banner from "../components/Banner";
import backgroundAbout from "../assets/about.jpg";
import styled from "styled-components";
import colors from "../utils/colors";
import Chevron from "../assets/chevron.svg";

const CollapseContainer = styled.div`
  width: 1023px;
  margin: 30px auto;
  gap: 30px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Collapse = styled.div`
  background-color: ${colors.grey};
  border-radius: 5px;
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
  font-size: 24px;
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

const about = [
  {
    title: "Fiabilité",
    content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
  },
  {
    title: "Respect",
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: "Sécurité",
    content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
]


function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
    <Banner backgroundImage={backgroundAbout} title={false}/>
    <CollapseContainer>
      {about.map((item, index) => (
        <Collapse onClick={() => handleCollapse(index)} key={item.title}>
          <CollapseTitle>{item.title}<ChevronIcon up={openIndex === index} src={Chevron} alt="chevron" /></CollapseTitle>
          {openIndex === index && <CollapseContent>{item.content}</CollapseContent>}
        </Collapse>
      ))}
    </CollapseContainer>
    </>
  );
}

export default About;
