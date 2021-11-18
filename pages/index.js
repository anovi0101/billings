import { Divider, Box, Grid, Container, Typography } from "@mui/material";
import { Check, CalendarToday } from "@mui/icons-material";

import Invoices from "../components/Invoices";
import AppBarComponent from "../components/AppBar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import * as React from "react";

const invoiceNumbers = [
  { id: 8, status: "ISSUED", due: "21/11/2020", amount: 79.99 },
  { id: 7, status: "OVERDUE", due: "21/10/2020", amount: 49.99 },
  { id: 6, status: "PAID", due: "21/09/2020", amount: 79.99 },
  { id: 5, status: "PAID", due: "21/08/2020", amount: 49.99 },
  { id: 4, status: "PAID", due: "21/07/2020", amount: 29.99 },
  { id: 3, status: "PAID", due: "21/06/2020", amount: 79.99 },
  { id: 2, status: "PAID", due: "21/05/2020", amount: 39.99 },
  { id: 1, status: "PAID", due: "21/04/2020", amount: 79.99 },
];

const drawerWidth = 240;

export default function Home(props) {
  return (
    <>
      <Sidebar width={drawerWidth} />
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          background: "#F2F5F8",
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
            display: "grid",
          }}
        >
          <Typography variant="subtitle2">Account Balance</Typography>
          <Typography variant="h2">49,99{"\u20AC"}</Typography>
          <Grid
            container
            sx={{
              justifyContent: "space-evenly",
              p: 1,
              padding: "2rem 1rem 1rem",
            }}
          >
            <Grid item>
              <Typography>
                <Check />
              </Typography>
              <Typography variant="subtitle2">Overdue balance</Typography>
              <Typography variant="h5">0{"\u20AC"}</Typography>
            </Grid>

            <Grid item>
              <Divider
                light
                orientation="vertical"
                sx={{ borderColor: "white" }}
              />
            </Grid>

            <Grid item>
              <Typography>
                <CalendarToday />
              </Typography>
              <Typography variant="subtitle2">
                Due on {invoiceNumbers[0].due}
              </Typography>
              <Typography variant="h5">
                {invoiceNumbers[0].amount}
                {"\u20AC"}
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="subtitle2">
            Next invoice will be issued on 21/11/2020.
          </Typography>
        </Box>
        <Invoices invoicesIds={invoiceNumbers} />
      </Container>

      <Footer />
    </>
  );
}
