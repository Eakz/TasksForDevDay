import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RenderRoutes from './Navigation';
import { ThemeProvider } from 'styled-components';
import defTheme from './DefaultTheme';
import MainLayout from '../Layout/MainLayout';
import GlobalCSS from './global.css';

const AppThisIs = () => (
  <ThemeProvider theme={defTheme}>
    <GlobalCSS />
    <BrowserRouter>
      <MainLayout>
        <RenderRoutes />
      </MainLayout>
    </BrowserRouter>
  </ThemeProvider>
);

export default AppThisIs;
