import React from 'react';
import styled from 'styled-components';
import NavBar from './Components/Navbar/Navbar';

const MainLayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const ContentContainer = styled.div`
  flex: 1;
`;

const MainLayout = ({ children }) => {
  return (
    <MainLayoutContainer>
      <NavBar />
      <ContentContainer>{children}</ContentContainer>
    </MainLayoutContainer>
  );
};

export default MainLayout;
