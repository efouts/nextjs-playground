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
          <form
            action={`/route-handler-with-layout-suspense/redirect?path=${encodeURIComponent(
              "/server-action-with-layout-suspense/other-page"
            )}`}
          >
            <button type="submit">Goto page</button>
          </form>
        </SomeComponentWithDataFetching>
      </Suspense>
    </>
  );
}
