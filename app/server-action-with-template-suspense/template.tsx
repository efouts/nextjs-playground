import { Suspense } from "react";
import SomeComponentWithDataFetching from "@/components/some-component-with-data-fetching";

export default function CheckoutTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Suspense fallback={<p>Loading...</p>}>
        <SomeComponentWithDataFetching sleepTime={5000}>
          Some fetched data
        </SomeComponentWithDataFetching>
      </Suspense>
    </>
  );
}
