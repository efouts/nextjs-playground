import NavigateButton from "@/components/navigation-button";
import SomeComponentWithDataFetching from "@/components/some-component-with-data-fetching";
import React, { Suspense } from "react";

export const dynamic = "force-dynamic"; // force SomeContentWithDataFetching to be dynamic

export default function Page() {
  return (
    <>
      <Suspense fallback={<p>Loading in page...</p>}>
        <SomeComponentWithDataFetching sleepTime={2500}>
          <p>Other page</p>
          <p>{Date.now()}</p>
          <NavigateButton
            label="Go to page"
            path="/server-action-with-layout-without-form//page"
          />
        </SomeComponentWithDataFetching>
      </Suspense>
    </>
  );
}
