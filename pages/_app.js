// Aqui que a gente estrtura o estilo da nossa app
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
   * {
      box-sizing: border-box;
   }
   body {
      margin: 0;
      padding: 0;
      /* New styles */
      display: flex;
      flex-direction: column;
      font-family: 'Lato', sans-serif;
      color: ${({ theme }) => theme.colors.contrastText};
   }
      html, body {
      min-height: 100vh;
   }
      #__next {
      flex: 1;
      display: flex;
      flex-direction: column; 
   }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <Primary Meta Tags */}
        <meta name="title" content={db.title} />
        <meta name="description" content="Teste seus conhecimentos gerais!" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alura-quiz.rickson-lima.vercel.app" />
        <meta property="og:title" content={db.title} />
        <meta property="og:description" content="Teste seus conhecimentos gerais!" />
        <meta property="og:image" content="https://alura-quiz.rickson-lima.vercel.app/meta-tag-image.png" />

        {/* favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/favicon/favicon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/* font import */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
