// import '../styles/About.css'
import React from "react";
import Banner from "../components/Banner";
import backgroundAbout from "../assets/about.jpg";
import CollapseComponent from "../components/Collapse";

const aboutTitle = ['Fiabilité', 'Respect', 'Service', 'Sécurité']
const aboutContent = ["Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.", "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.", "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.", "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."]

function About() {

  return (
    <>
    <Banner backgroundImage={backgroundAbout}/>
    <CollapseComponent titles={aboutTitle} contents={aboutContent}/>
    </>
  );
}

export default About;
