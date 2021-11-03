import { useRouter } from "next/dist/client/router";

export default function Invoice() {
    const router = useRouter();
    return <h1>This is an invoice {router.query.invoice}</h1>;
  }
  