import { useRouter } from "next/router";
import { AppBar, Grid, Container, IconButton, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

export default function Invoice() {
  const router = useRouter();
  return (
    <Container sx={{ paddingLeft: "0", paddingRight: "0", width: "360px" }}>
      <AppBar
        position="sticky"
        style={{
          background: "#fff",
          color: "#32424E",
          display: "flex",
          flexDirection: "row",
          height: "80px",
          alignItems: "center",
          boxShadow: "0px 0px 0px 0px",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        <IconButton>
          <ArrowBack />
        </IconButton>
        <Typography variant="h5">October</Typography>
      </AppBar>
      <Grid
        container
        spacing={1}
        sx={{
          height: "64px",
          background: "linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)",
          margin: "0",
          color: "#fff",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={5}>
          <Typography>Invoice number</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant>Due date</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography>{router.query.invoice}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography>21/10/2020</Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={1}
        sx={{
          height: "auto",
          background: "#fff",
          margin: "0",
          color: "#32424E",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={5}>
          <Typography variant="subtitle2" style={{fontWeight:"bold"}}>Plan Details</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="subtitle2" style={{fontWeight:"bold"}}>Amount</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">ILIMITADA 30</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography>21/09/2020 - 21/10/2020</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography>49,99</Typography>
        </Grid>
        <Divider />
        <Grid item xs={5}>
          <Typography>Sub Total</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography>49,99</Typography>
        </Grid>
      </Grid>

      <Button
        variant="outlined"
        style={{ color: "#465967"}}
      >
        VIEW INVOICE AS PDF
      </Button>
    </Container>
  );
}
