import Link from 'next/link';

const invoiceNumbers = [
  {id: 123455},
  {id: 234567},
  {id: 345678},
  {id: 456789},
  {id: 567890}
]

export default function Home() {
  return (
  <>
  <h2>
    Billing
  </h2>
  <h2>
    My Invoices
  </h2>
  {invoiceNumbers.map((number) => {
    return <div key={invoiceNumbers.id}>
      <Link as={`/invoices/${number.id}`} href="/invoices/[invoice]">
      <a>{number.id}</a>
      </Link>
      </div>
  })}
  </>
  )
}