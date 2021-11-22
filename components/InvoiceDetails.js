import { Grid, Typography, Divider, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function InvoiceDetails(props) {
  function getStartingDate(date) {
    const splitDate = date.split("/");
    return `${splitDate[0]}/${Number(splitDate[1]) - 1}/${splitDate[2]}`;
  }
  return (
    <Grid
      container
      sx={{
        backgroundColor: " #FFFFFF",
        marginTop: 2,
      }}
      justifyContent="space-around"
    >
      <Grid container sx={{ padding: 2, justifyContent: "space-between" }}>
        <Typography
          sx={{
            display: "flex",
            padding: "16px 0",
            width: "100%",
            color: "#0AA5AB",
            fontWeight: "bold",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          View invoice as PDF
          <IconButton onClick={props.onCardClose}>
            <CloseIcon sx={{ color: "#32424E" }} />
          </IconButton>
        </Typography>

        <Typography>
          <Typography variant="body1" sx={{ color: "#707b83" }}>
            Invoice number
          </Typography>
          <Typography variant="body2" sx={{ color: "#32424e" }}>
            {props.id}
          </Typography>
        </Typography>

        <Typography component="div" sx={{ textAlign: "end" }}>
          <Typography variant="body1" sx={{ color: "#707b83" }}>
            Due date
          </Typography>
          <Typography variant="body2" sx={{ color: "#32424e" }}>
            {props.due}
          </Typography>
        </Typography>
      </Grid>

      <Grid
        item
        container
        justifyContent="space-between"
        sx={{ padding: "0 16px " }}
      >
        <Typography gutterBottom variant="h6">
          <strong>Plan details</strong>
        </Typography>
        <Typography variant="h6">
          <strong>Amount</strong>
        </Typography>
      </Grid>

      <Grid container justifyContent="space-between" sx={{ p: "8px 16px" }}>
        <Grid item>
          <Typography variant="body1" gutterBottom>
            ILIMITADA 30
          </Typography>
          <Typography variant="body2">
            {getStartingDate(props.due)} - {props.due}
          </Typography>
        </Grid>
        <Grid item sx={{ marginTop: "1.5rem" }}>
          <Typography variant="subtitle1">
            {props.amount}
            {"\u20AC"}
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ width: "95%" }} />

      <Grid
        item
        container
        sx={{
          margin: "0 24px",
          fontWeight: "bold",
          paddingTop: "25px",
          fontSize: "20px",
          p: 2,
          margin: 0,
        }}
        justifyContent="space-between"
      >
        <Typography variant="h6">Sub Total</Typography>
        <Typography variant="h6">
          {props.amount}
          {"\u20AC"}
        </Typography>
      </Grid>
    </Grid>
  );
}
