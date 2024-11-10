"use client";

import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import Header from '../components/Header';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    <GlobalStyle />
    <body>
      <Header walletAddress="0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d" />
      {children}
    </body>
  </html>
);

export default RootLayout;
