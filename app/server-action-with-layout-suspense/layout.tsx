import { Suspense } from "react";
import SomeComponentWithDataFetching from "@/components/some-component-with-data-fetching";

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Suspense fallback={<p>Loading...</p>}>
        <SomeComponentWithDataFetching sleepTime={5000}>
          <p>Dynamic data fetched on the layout</p>
        </SomeComponentWithDataFetching>
      </Suspense>
    </>
  );
}
