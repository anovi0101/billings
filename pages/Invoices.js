import { Grid, Typography } from "@mui/material";
import InvoiceCard from "./InvoiceCard";

export default function Invoices(props) {
    return props.invoicesIds.map((number) => {
                return (
                  <InvoiceCard
                    key={number.id}
                    id={number.id}
                    href="/invoices/[invoice]"
                  />
                );
              })
}
