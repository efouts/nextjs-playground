import { Suspense } from "react";
import SomeComponentWithDataFetching from "@/components/some-component-with-data-fetching";
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
      <Suspense fallback={<p>Loading in layout...</p>}>
        <SomeComponentWithDataFetching sleepTime={5000}>
          <p>Dynamic data fetched on the layout</p>
        </SomeComponentWithDataFetching>
      </Suspense>
    </>
  );
}
