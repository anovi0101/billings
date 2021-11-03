import Link from "next/link";

import Header from "../components/Header";

const invoices = [
  { invoiceNumber: 248294 },
  { invoiceNumber: 27318 },
  { invoiceNumber: 3131 },
];

export default function Billings() {
  const showHeader = true;

  return (
    <div>
      {showHeader && <Header />}
      <h1>Billings</h1>
      {invoices.map((invoice) => {
        return (
          <div key={invoice.invoiceNumber}>
            <Link as={"/" + invoice.invoiceNumber} href="/[invoice]">
              <a>{invoice.invoiceNumber}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
