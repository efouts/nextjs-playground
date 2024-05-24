import { Suspense } from "react";
import CheckoutSummary from "@/components/checkout-summary";
import Link from "next/link";

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Link href="/">Home</Link>
      {children}
      <Suspense fallback={<p>Loading summary...</p>}>
        <CheckoutSummary />
      </Suspense>
    </>
  );
}
