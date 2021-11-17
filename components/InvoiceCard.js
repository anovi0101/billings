import { Grid, Paper, Typography } from "@mui/material";
import Link from "next/link";

export default function InvoiceCard(props) {
  return (
    <Paper
      sx={{
        p: 2,
        marginTop: 2,
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 500,
        flexGrow: 1,
        borderRadius: 0,
        boxShadow: "inset 0px -1px 0px rgba(50, 66, 78, 0.1)",
      }}
    >
      <Link href={props.href} as={`/invoices/${props.id}`} passHref>
        <Grid
          container
          spacing={2}
          sx={{
            marginLeft: 0,
            "&:not(:first-child)": { marginTop: "16px" },
            backgroundColor: "#fff",
          }}
        >
          <Grid item xs container direction="column" sx={{ color: "#32424E" }}>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="div"
              sx={{ opacity: 0.4 }}
            >
              Invoice {props.id}
            </Typography>
            <Typography variant="h6" gutterBottom>
              October
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ opacity: 0.7 }}
            >
              Paid on <strong>21/10/2020</strong>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
                backgroundColor: "#7DBE00",
                color: "#fff",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
                right: 0,
              }}
            >
              PAID
            </Typography>
            <Typography variant="h5" sx={{ paddingRight: 1 }}>
              49,99{"\u20AC"}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                textAlign: "center",
                color: "#32424E",
                opacity: "0.7",
                right: 0,
              }}
            >
              View
            </Typography>
          </Grid>
        </Grid>
      </Link>
    </Paper>
  );
}
