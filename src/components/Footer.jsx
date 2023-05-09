import styled from 'styled-components'
import colors from '../utils/colors'
import logoWhite from '../assets/KasaLogoWhite.png'

const FooterContainer = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.black};
  height: 210px;
`;

const Img = styled.img`
  width: 122px;
  height: 40px;
  margin: 66px auto 0;
  @media (max-width: 1024px) {
    margin: 60px auto 0;
  }
`;

const Infos = styled.p`
  color: ${colors.white};
  font-size: 24px;
  font-weight: 500;
  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

function Footer() {
    return (
        <FooterContainer>
          <Img src={logoWhite} alt="Kasa logo blanc"/>
          <Infos>© 2020 Kasa. All rights reserved</Infos>
        </FooterContainer>
    )
}

export default Footer
