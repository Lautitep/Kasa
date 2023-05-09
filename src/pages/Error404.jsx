import { Link } from 'react-router-dom'
import styled from "styled-components";
import colors from "../utils/colors";


const Header = styled.header`
  color: ${colors.pink};
  text-align: center;
  @media (max-width: 1024px) {
    padding: 0 37px;
  }
  @media (max-width: 768px) {
  }
`;


const Title404 = styled.h1`
  font-size: 288px;
  font-weight: 700;
  margin: 186px auto 66px;
  @media (max-width: 1024px) {
    font-size: 96px;
    margin: 186px auto 11px;
  }
  @media (max-width: 768px) {
  }
`;

const Text404 = styled.p`
  color: ${colors.pink};
  font-size: 36px;
  font-weight: 500;
  margin: 0 0 182px 0;
  @media (max-width: 1024px) {
    font-size: 18px;
    margin: 0 0 133px 0;
  }
  @media (max-width: 768px) {
  }
`;

const ErrorLink = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  color: ${colors.pink};
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 768px) {
  }
`;

function Error404() {
  return (
    <div className="Error404">
      <Header className="Error404-header">
        <Title404>
          404
        </Title404>
        <Text404>Oups! La page que vous demandez n‘existe pas.</Text404>
        <ErrorLink to="/">Retourner sur la page d‘accueil</ErrorLink>
      </Header>
    </div>
  );
}

export default Error404;
