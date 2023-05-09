import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/KasaLogo.png'
import styled from 'styled-components'
import colors from '../utils/colors'

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 125px;
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 57px;
  align-items: center;
  @media (max-width: 1024px) {
    gap: 15px;
  }
`;

const NavbarLink = styled(Link)`
  color: ${colors.pink};
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  :hover{
    text-decoration: underline;
  }
  @media (max-width: 1024px) {
    font-size: 12px;
    text-transform: uppercase;
  }
`;

function NavBar() {
    return (
        <Navbar>
          <NavbarLink to="/"><Img src={logo} alt="Kasa logo"/></NavbarLink>
            <LinkContainer>
            <NavbarLink to="/">Accueil</NavbarLink>
            <NavbarLink to="/about">À Propos</NavbarLink>
            </LinkContainer>
        </Navbar>
    )
}

export default NavBar
