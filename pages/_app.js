import App from "next/app";
import Head from "next/head";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

const invoiceNumbers = [
  { id: 8, status: "ISSUED", due: "21/11/2020", amount: 79.99 },
  { id: 7, status: "OVERDUE", due: "21/10/2020", amount: 49.99 },
  { id: 6, status: "OVERDUE", due: "21/09/2020", amount: 79.99 },
  { id: 5, status: "PAID", due: "21/08/2020", amount: 49.99 },
  { id: 4, status: "PAID", due: "21/07/2020", amount: 29.99 },
  { id: 3, status: "PAID", due: "21/06/2020", amount: 79.99 },
  { id: 2, status: "PAID", due: "21/05/2020", amount: 39.99 },
  { id: 1, status: "PAID", due: "21/04/2020", amount: 79.99 },
];

function BillingApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const [state, setState] = React.useState(invoiceNumbers);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <sSidebar width={}/> */}
        {/* <Container sx={{}}> */}
        <Component mydata={state} {...pageProps} />
        {/* </Container/> */}
        {/* <Footer /> */}
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
