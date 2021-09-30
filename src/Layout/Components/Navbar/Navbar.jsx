import React from 'react';
import { Link } from 'react-router-dom';
import { pages } from '../../../App/Navigation';
import { NavBarContainer, NavBarLogoContainer } from './styled';
import NavLogo from './NavLogo';

const NavBar = () => {
  return (
    <NavBarContainer>
      <Link to={pages.landing}>
        <NavBarLogoContainer>
          <NavLogo width={60} height={40} />
        </NavBarLogoContainer>
      </Link>
      <p>Trive Dev Day Coding Challenges</p>
    </NavBarContainer>
  );
};

export default NavBar;
