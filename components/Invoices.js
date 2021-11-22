import InvoiceCard from "./InvoiceCard";
import InvoiceDetails from "./InvoiceDetails";
import { Grid, Typography } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Invoices(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const router = useRouter();

  const [selectedInvoice, setSelectedInvoice] = useState(null);

  return (
    <Grid
      container
      direction="column"
      sx={{
        background: "#F2F5F8",
        boxSizing: "border-box",
        minHeight: "50vh",
        overflowY: "hidden",
      }}
    >
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
            xs={7}
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              flexDirection: "column",
            }}
          >
            {props.invoicesIds.length === 0 && (
              <Grid item xs={4}>
                <Typography>There are no invoices available</Typography>
              </Grid>
            )}
            {props.invoicesIds.map((invoice) => {
              return (
                <InvoiceCard
                  onCardClick={
                    isMobile
                      ? () => router.push(`/invoices/${invoice.id}`)
                      : () => setSelectedInvoice(invoice)
                  }
                  className="invoiceCard"
                  key={invoice.id}
                  id={invoice.id}
                  status={invoice.status}
                  due={invoice.due}
                  amount={invoice.amount}
                />
              );
            })}
          </Grid>
          {selectedInvoice && !isMobile && (
            <Grid item xs={4}>
              <InvoiceDetails
                onCardClose={() => setSelectedInvoice(null)}
                key={selectedInvoice.id}
                id={selectedInvoice.id}
                status={selectedInvoice.status}
                due={selectedInvoice.due}
                amount={selectedInvoice.amount}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
