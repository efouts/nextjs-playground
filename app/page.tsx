import Link from "next/link";

export default function Page() {
  return (
    <>
      <p>
        <Link href="/checkout/create">Checkout</Link>
      </p>
      <p>
        <Link href="/checkout-using-params?step=create">
          Checkout using params
        </Link>
      </p>
      <p>
        <Link href="/server-action-with-layout-suspense/page">
          Server action with layout suspense
        </Link>
      </p>
      <p>
        <Link href="/server-action-with-template-suspense/page">
          Server action with template suspense
        </Link>
      </p>
    </>
  );
}
