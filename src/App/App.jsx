import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RenderRoutes from './Navigation';
import { ThemeProvider } from 'styled-components';
import defTheme from './DefaultTheme';
import MainLayout from '../Layout/MainLayout';

const AppThisIs = () => (
  <ThemeProvider theme={defTheme}>
    <BrowserRouter>
      <MainLayout>
        <RenderRoutes />
      </MainLayout>
    </BrowserRouter>
  </ThemeProvider>
);

export default AppThisIs;
