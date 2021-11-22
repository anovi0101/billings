import { Grid, Paper, Typography, useMediaQuery, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { getMonthName, getDueMessage } from "./Utils/Utils";

export default function InvoiceCard(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const STATUS_COLORS = {
    PAID: "#7DBE00",
    OVERDUE: "#CF4520",
    ISSUED: "#64CEFB",
  };

  return (
    <Paper
      className={props.className}
      onClick={props.onCardClick}
      sx={{
        p: 2,
        marginTop: 2,
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 900,
        flexGrow: 1,
        borderRadius: 0,
        border: props.isSelected
          ? "2px solid rgba(10, 165, 171, 0.4)"
          : "undefined",
        boxShadow: "inset 0px -1px 0px rgba(50, 66, 78, 0.1)",
        "&:not(:first-of-type)": { marginTop: "16px" },
      }}
    >
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
            {getMonthName(props.due)}
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
          <Typography
            variant="h5"
            sx={{ paddingRight: 1, marginTop: "0.2rem" }}
          >
            {props.amount}
            {"\u20AC"}
          </Typography>
          {!isMobile && (
            <Button>
              <Typography
                variant="subtitle2"
                sx={{
                  textAlign: "center",
                  color: "#32424E",
                  opacity: "0.7",
                  right: 0,
                  marginTop: "0.2rem",
                }}
              >
                View
              </Typography>
            </Button>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}
