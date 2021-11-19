import { Grid, Paper, Typography } from "@mui/material";
import Link from "next/link";

export default function InvoiceCard(props) {
  const STATUS_COLORS = {
    PAID: "#7DBE00",
    OVERDUE: "#CF4520",
    ISSUED: "#64CEFB",
  };

  function getMonthName(month) {
    const d = new Date();
    d.setMonth(month - 1);
    const monthName = d.toLocaleString("default", { month: "long" });
    return monthName;
  }

  function getDueMessage(status) {
    if (status === "OVERDUE") {
      return "Was due on";
    } else if (status === "ISSUED") {
      return "Due on";
    }
    return "Paid on";
  }

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
        "&:not(:first-child)": { marginTop: "16px" },
      }}
    >
      <Link href={props.href} as={`/invoices/${props.id}`} passHref>
        <Grid
          container
          spacing={2}
          sx={{
            marginLeft: 0,
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
              {getMonthName(props.due.split("/")[1])}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ opacity: 0.7 }}
            >
              {getDueMessage(props.status)} <strong>{props.due}</strong>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
                backgroundColor: STATUS_COLORS[props.status],
                color: "#fff",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
                right: 0,
              }}
            >
              {props.status}
            </Typography>
            <Typography variant="h5" sx={{ paddingRight: 1 }}>
              {props.amount}
              {"\u20AC"}
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
