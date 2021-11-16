import {
  Divider,
  Box,
  Grid,
  Container,
  Typography,
} from "@mui/material";
import {
  Check,
  CalendarToday,
} from "@mui/icons-material";

import Invoices from "./Invoices";
import AppBarComponent from "./AppBar";

const invoiceNumbers = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8},
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
];

export default function Home() {
  return (
    <Container disableGutters sx={{ flexGrow: 1, background: "#F2F5F8"}}>
      <AppBarComponent />
      <Box
        sx={{
          color: "#fff",
          background: "linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)",
          textAlign: "center",
          height: "290px",
          display: "grid"
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
            <Typography variant="subtitle2">Due on 21/10/2020</Typography>
            <Typography variant="h5">49,99{"\u20AC"}</Typography>
          </Grid>
        </Grid>
        <Typography variant="subtitle2">
          Next invoice will be issued on 21/11/2020.
        </Typography>
      </Box>

      <Invoices invoicesIds={invoiceNumbers}/>
    </Container>
  );
}
