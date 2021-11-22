import { Divider, Box, Grid, Container, Typography } from "@mui/material";
import { Check, CalendarToday } from "@mui/icons-material";

import InvoiceList from "../components/InvoiceList";
import AppBarComponent from "../components/AppBar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import * as React from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const drawerWidth = 240;

export default function Home(props) {
  const invoiceNumbers = props.mydata;
  const noInvoices = invoiceNumbers.length === 0;
  const today = new Date();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  function getOverdueBalance() {
    return invoiceNumbers.reduce(
      (accumulator, currentElement) =>
        currentElement.status === "OVERDUE"
          ? accumulator + currentElement.amount
          : accumulator,
      0
    );
  }

  function getAccountBalance() {
    return invoiceNumbers.reduce(
      (accumulator, currentElement) =>
        currentElement.status === "OVERDUE" ||
        currentElement.status === "ISSUED"
          ? accumulator + currentElement.amount
          : accumulator,
      0
    );
  }

  function roundAccountBalance() {
    return Math.round(getAccountBalance() * 100) / 100;
  }

  return (
    <>
      <Sidebar width={drawerWidth} />
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          width: { xs: "auto", lg: `calc(100vw - ${drawerWidth}px)` },
          marginRight: 0,
        }}
      >
        <AppBarComponent
          sx={{
            ml: { sm: `${drawerWidth}px` },
          }}
        />

        <Box
          sx={{
            color: "#fff",
            background: "linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)",
            textAlign: "center",
            height: "290px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container direction="column">
            <Typography variant="h6">Account Balance</Typography>
            <Typography variant="h2">
              {noInvoices ? "0" : roundAccountBalance()}
              {"\u20AC"}
            </Typography>
            {isMobile && (
              <Grid
                container
                sx={{
                  justifyContent: "space-evenly",
                  padding: "2rem 1rem 1rem",
                  backgroundColor: "#419ec1",
                }}
              >
                <Grid
                  item
                  sx={{
                    display: noInvoices ? "none" : "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography>
                    <Check />
                  </Typography>
                  <Typography variant="subtitle2">Overdue balance</Typography>
                  <Typography variant="h5">
                    {getOverdueBalance()}
                    {"\u20AC"}
                  </Typography>
                </Grid>

                <Grid
                  item
                  sx={{
                    display: noInvoices ? "none" : "flex",
                    flexDirection: "column",
                  }}
                >
                  <Divider
                    light
                    orientation="vertical"
                    sx={{ borderColor: "white" }}
                  />
                </Grid>

                <Grid
                  item
                  sx={{
                    display: noInvoices ? "none" : "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography>
                    <CalendarToday />
                  </Typography>
                  <Typography variant="subtitle2">
                    Due on {invoiceNumbers[0]?.due}
                  </Typography>
                  <Typography variant="h5">
                    {invoiceNumbers[0]?.amount}
                    {"\u20AC"}
                  </Typography>
                </Grid>
              </Grid>
            )}
            <Typography variant="subtitle2" sx={{ margin: "1rem auto" }}>
              Next invoice will be issued on{" "}
              {`21/${today.getMonth() + 1}/${today.getFullYear()}`}.
            </Typography>
          </Grid>

          {!isMobile && (
            <Grid container sx={{ justifyContent: "center" }}>
              <Grid
                container
                sx={{
                  justifyContent: "space-evenly",
                  padding: "2rem 1rem 1rem",
                  backgroundColor: "#419ec1",
                  maxWidth: "70%",
                }}
              >
                <Grid
                  item
                  sx={{
                    display: noInvoices ? "none" : "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography>
                    <Check />
                  </Typography>
                  <Typography variant="subtitle2">Overdue balance</Typography>
                  <Typography variant="h5">
                    {getOverdueBalance()}
                    {"\u20AC"}
                  </Typography>
                </Grid>

                <Grid
                  item
                  sx={{
                    display: noInvoices ? "none" : "flex",
                    flexDirection: "column",
                  }}
                >
                  <Divider
                    light
                    orientation="vertical"
                    sx={{ borderColor: "white" }}
                  />
                </Grid>

                <Grid
                  item
                  sx={{
                    display: noInvoices ? "none" : "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography>
                    <CalendarToday />
                  </Typography>
                  <Typography variant="subtitle2">
                    Due on {invoiceNumbers[0]?.due}
                  </Typography>
                  <Typography variant="h5">
                    {invoiceNumbers[0]?.amount}
                    {"\u20AC"}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Box>
        <InvoiceList invoicesIds={invoiceNumbers} />
      </Container>

      <Footer />
    </>
  );
}
