import { Suspense } from "react";
import SomeComponentWithDataFetching from "@/components/some-component-with-data-fetching";
import Link from "next/link";

export default function CheckoutTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Link href="/">Home</Link>
      {children}
      <Suspense fallback={<p>Loading in template...</p>}>
        <SomeComponentWithDataFetching sleepTime={5000}>
          <p>Some data fetched on the template</p>
        </SomeComponentWithDataFetching>
      </Suspense>
    </>
  );
}
