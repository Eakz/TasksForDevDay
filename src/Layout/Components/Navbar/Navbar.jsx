import React from 'react';
import { Link } from 'react-router-dom';
import { pages } from '../../../App/Navigation';
import { NavBarContainer, NavBarLogoContainer } from './styled';
import NavLogo from './NavLogo';
import useStore from '../../../App/Store';

const NavBar = () => {
  const { animation } = useStore();

  console.log(animation);
  return (
    <NavBarContainer animation={animation}>
      <div>
        <Link to={pages.landing}>
          <NavBarLogoContainer>
            <NavLogo width={60} height={40} />
          </NavBarLogoContainer>
        </Link>
        <p>
          <span id='odd'>T</span>
          <span id='even'>r</span>
          <span id='odd'>i</span>
          <span id='even'>v</span>
          <span id='odd'>e</span> Dev Day Coding Challenges
        </p>
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
