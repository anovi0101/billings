import { Grid, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Grid
      container
      position="fixed"
      sx={{
        display: { xs: "none", lg: "flex" },
        background: "#FBFCFD",
        color: "#465967",
        p: 1,
        height: "44px",
        bottom: 0,
        left: 0,
        alignContent: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography sx={{ padding: "0 3rem" }}>Blog</Typography>
      <Typography sx={{ padding: "0 3rem" }}>About us</Typography>
      <Typography sx={{ padding: "0 3rem" }}>T&C</Typography>
      <Typography sx={{ padding: "0 3rem" }}>Privacy policy</Typography>
      <Typography sx={{ marginLeft: "auto" }}>
        Viasat Internet is a service provided by Viasat Europe Sarl.
      </Typography>
    </Grid>
  );
}
