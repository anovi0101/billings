import App from "next/app";
import Head from "next/head";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../styles/globals.css";
import axios from "axios";
const theme = createTheme();

function BillingApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`http://${process.env.NEXT_PUBLIC_API_URL}/api/invoices`)
      .then((response) => {
        setState(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component mydata={state} {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default BillingApp;

export async function getInitialProps(appContext) {
  return {
    ...(await App.getInitialProps(appContext)),
  };
}
