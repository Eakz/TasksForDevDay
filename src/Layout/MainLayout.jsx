import React from 'react';
import styled from 'styled-components';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/Navbar/Navbar';

const MainLayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;
const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
`;

const MainLayout = ({ children }) => {
  return (
    <MainLayoutContainer>
      <NavBar />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </MainLayoutContainer>
  );
};

export default MainLayout;
