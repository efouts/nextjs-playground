import { Suspense } from "react";
import CheckoutSummary from "@/components/checkout-summary";

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Suspense fallback={<p>Loading summary...</p>}>
        <CheckoutSummary />
      </Suspense>
    </>
  );
}
