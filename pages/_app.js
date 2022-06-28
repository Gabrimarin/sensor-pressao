import React from "react";
import App from "next/app";
import Head from "next/head";
import { Box, Card, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import ElevateAppBar from "../components/NavBar/inedx";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
      },
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Sensor de Pressão</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div>
          <ThemeProvider theme={theme}>
            <ElevateAppBar />
            <CssBaseline />
            <Box
              minHeight="100%"
              maxWidth="100vw"
              alignItems="center"

              justifyContent="center"
              display="flex"
              bgcolor="Background.default"
            >
              <Card sx={{ padding: '8%', width: "100%", margin: '2%' }}>
                <Component {...pageProps} />
              </Card>
            </Box>
          </ThemeProvider>
        </div>
        <style global jsx>{`
          html,
          body,
          body > div:first-child,
          div#__next,
          div#__next > div {
            height: 100%;
            margin: 0;
          }
        `}</style>
      </>
    );
  }
}

export default MyApp;
