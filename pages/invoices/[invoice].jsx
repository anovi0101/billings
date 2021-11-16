import { useRouter } from "next/router";
import {
  AppBar,
  Grid,
  Container,
  IconButton,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

export default function Invoice() {
  const router = useRouter();

  return (
    <Container disableGutters maxWidth="900px">
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
        <IconButton onClick={() => router.back()}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h5">October</Typography>
      </AppBar>
      <Grid
        container
        sx={{
          height: "64px",
          background: "linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)",
          margin: "0",
          color: "#fff",
          justifyContent: "space-between",
          padding: 2,
        }}
      >
        <Grid item xs={5}>
          <Typography variant="subtitle2">Invoice number</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="subtitle2" sx={{ textAlign: "end" }}>
            Due date
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="subtitle1">{router.query.invoice}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="subtitle1" sx={{ textAlign: "end" }}>
            21/10/2020
          </Typography>
        </Grid>
      </Grid>

      <Container sx={{ width: "100%", padding: "16px" }}>
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
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Plan Details
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", textAlign: "end" }}
            >
              Amount
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">ILIMITADA 30</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="subtitle2" sx={{ opacity: 0.7 }}>
              21/09/2020 - 21/10/2020
            </Typography>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: "end" }}>
            <Typography>49,99{"\u20AC"}</Typography>
          </Grid>
          <Divider flexItem sx={{ flexGrow: 1, flexBasis: "100%" }} />
          <Grid item xs={5}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Sub Total
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", textAlign: "end" }}
            >
              49,99{"\u20AC"}
            </Typography>
          </Grid>
        </Grid>

        <Button
          variant="outlined"
          fullWidth
          style={{
            color: "#465967",
            border: "1px solid #465967",
            borderRadius: "40px",
          }}
        >
          VIEW INVOICE AS PDF
        </Button>
      </Container>
    </Container>
  );
}
