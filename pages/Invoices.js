import { Paper } from "@mui/material";
import InvoiceCard from "./InvoiceCard";

export default function Invoices(props) {
//   return (
//     <Paper
//       sx={{
//         // "& > :not(:first-child)": { marginTop: "16px" },
//         p: 2,
//         marginTop: 2,
//         marginLeft: "auto",
//         marginRight: "auto",
//         maxWidth: 500,
//         flexGrow: 1,
//         borderRadius: 0,
//         boxShadow: "inset 0px -1px 0px rgba(50, 66, 78, 0.1)",
//       }}
    
//       {props.invoicesIds.map((number) => {
//         return (
//           <InvoiceCard
//             key={number.id}
//             id={number.id}
//             href="/invoices/[invoice]"
//           />
//         );
//       })}
//     </Paper>
//   );
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
