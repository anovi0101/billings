import {Grid, Typography} from "@mui/material";
import Link from "next/link";

export default function InvoiceCard (props){
    return (
        <Link href={props.href} as={`/invoices/${props.id}`}>
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
            <Typography variant="subtitle1">PAID</Typography>
            <Typography variant="h5">49,99{"\u20AC"}</Typography>
          </Grid>
        </Grid>
        </Link>
    )
}