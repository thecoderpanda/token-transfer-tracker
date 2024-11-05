import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import Header from '../components/Header';

export const metadata = {
  title: 'Token Transfer Tracker',
  description: 'A dashboard to track token transfers in real-time',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    <GlobalStyle /> {/* Add global styles */}
    <body>
      <Header />     {/* Persistent header */}
      {children}     {/* Render child components (like pages) */}
    </body>
  </html>
);

export default RootLayout;
