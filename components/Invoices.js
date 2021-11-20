import InvoiceCard from "./InvoiceCard";
import { Grid, Typography, Box } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Invoices(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  let [selectedInvoice, setSelectedInvoice] = useState(null);

  return (
    <Grid container direction="column">
      <Grid item container direction="column">
        <Grid item xs={8}>
          <Typography
            variant="body1"
            align="left"
            gutterBottom
            sx={{
              marginLeft: isMobile ? "1rem" : "2rem",
              paddingTop: "1rem",
            }}
          >
            <strong>My invoices</strong>
          </Typography>
        </Grid>
        <Grid item container direction="row">
          <Grid
            item
            direction="column"
            xs={8}
            sx={{ marginLeft: "auto", marginRight: "auto" }}
          >
            {props.invoicesIds.map((invoice) => {
              return (
                <InvoiceCard
                  onCardClick={
                    isMobile
                      ? () => router.push(`/invoices/${invoice.id}`)
                      : () => setSelectedInvoice(invoice)
                  }
                  key={invoice.id}
                  id={invoice.id}
                  status={invoice.status}
                  due={invoice.due}
                  amount={invoice.amount}
                />
              );
            })}
          </Grid>
          {selectedInvoice && (
            <Grid item>
              <Typography>{selectedInvoice.id}</Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
