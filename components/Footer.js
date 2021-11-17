import { Grid, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Grid
      container
      position="fixed"
      sx={{
        display: { xs: "none", lg: "flex" },
        justifyContent: "space-between",
        background: "#FBFCFD",
        color: "#465967",
        p: 1,
        height: "44px",
        bottom: 0,
        left: 0,
      }}
    >
      <Typography>Blog</Typography>
      <Typography>About us</Typography>
      <Typography>T&C</Typography>
      <Typography>Privacy policy</Typography>
      <Typography>
        Viasat Internet is a service provided by Viasat Europe Sarl.
      </Typography>
    </Grid>
  );
}
