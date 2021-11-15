import { Icon, Link } from "@mui/material";
import {
  AppBar,
  Divider,
  Box,
  Grid,
  Container,
  IconButton,
  Typography,
  Toolbar,
  Button,
  Paper,
} from "@mui/material";
import {
  ArrowBack,
  ContactSupport,
  Check,
  CalendarToday,
} from "@mui/icons-material";

const invoiceNumbers = [
  { id: 123455 },
  { id: 234567 },
  { id: 345678 },
  { id: 456789 },
  { id: 567890 },
];

export default function Home() {
  return (
    <Container disableGutters sx={{ flexGrow: 1, background: "#DEE4E8"}}>
      <AppBar
        position="static"
        sx={{
          boxShadow: "0px 0px 0px 0px",
          height: "5rem",
          background: "linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)",
          color: "#fff",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
          >
            <ArrowBack />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "700" }}
          >
            Billing
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: -1 }}
          >
            <ContactSupport />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          color: "#fff",
          background: "linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)",
          textAlign: "center",
          height: "290px",
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

      <Paper sx={{ p: 2, marginTop: 2,marginLeft: "auto", marginRight:"auto", maxWidth: 500, flexGrow: 1, borderRadius: 0, boxShadow: "inset 0px -1px 0px rgba(50, 66, 78, 0.1)"}}>
        <Grid container spacing={2}>
          <Grid item xs container direction="column" sx={{color: "#32424E"}}>
            <Typography gutterBottom variant="subtitle1" component="div" sx={{opacity: 0.4}}>
              Invoice 210230138
            </Typography>
            <Typography variant="h6" gutterBottom>
              October
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{opacity: 0.7}}>
              Paid on <strong>21/10/2020</strong>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" sx={{right: 1}}>PAID</Typography>
            <Typography variant="h5">49,99{"\u20AC"}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>

    /*
    <Container disableGutters maxWidth="sm">
      <AppBar
        position="sticky"
        style={{
          background: "linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)",
          color: "#fff",
          flexDirection: "row",
          height: "80px",
          alignItems: "center",
          boxShadow: "0px 0px 0px 0px",
          fontSize: "24px",
          fontWeight: "700",
          justifyContent: "space-between"
        }}
      >
        <IconButton >
          <ArrowBack />
        </IconButton>
        <Typography variant="h5">Billing</Typography>     
      <IconButton >
          <ContactSupport />
        </IconButton>
        </AppBar>
        <Box style={{color: "#fff", background: "linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)", textAlign: "center"}}>
        <Typography variant="subtitle2">
            Account Balance
          </Typography>
          <Typography variant="h4">
            49,99{'\u20AC'}
          </Typography>
        </Box>

      </Container>  
      
  <>
  <h2>
    Billing
  </h2>
  <h2>
    My Invoices
  </h2>
  {invoiceNumbers.map((number) => {
    return <div key={invoiceNumbers.id}>
      <Link as={`/invoices/${number.id}`} href="/invoices/[invoice]">
      <a>{number.id}</a>
      </Link>
      </div>
  })}</> */
  );
}
