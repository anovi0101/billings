import InvoiceCard from "./InvoiceCard";

export default function Invoices(props) {
  return props.invoicesIds.map((number) => {
    return (
      <InvoiceCard
        key={number.id}
        id={number.id}
        status={number.status}
        due={number.due}
        amount={number.amount}
        href="/invoices/[invoice]"
      />
    );
  });
}
