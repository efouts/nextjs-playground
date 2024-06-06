import NavigateButton from "@/components/navigation-button";
import SomeComponentWithDataFetching from "@/components/some-component-with-data-fetching";
import React, { Suspense } from "react";

export const dynamic = "force-dynamic"; // force SomeContentWithDataFetching to be dynamic

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      {searchParams.page === "page" && (
        <Suspense key="page" fallback={<p>Loading in page...</p>}>
          <SomeComponentWithDataFetching sleepTime={2500}>
            <p>Page</p>
            <p>{Date.now()}</p>
            <NavigateButton
              label="Go to other page"
              path="/server-action-with-layout-same-page/page?page=other-page"
            />
          </SomeComponentWithDataFetching>
        </Suspense>
      )}

      {searchParams.page === "other-page" && (
        <Suspense key="other-page" fallback={<p>Loading in page...</p>}>
          <SomeComponentWithDataFetching sleepTime={2500}>
            <p>Other Page</p>
            <p>{Date.now()}</p>
            <NavigateButton
              label="Go to page"
              path="/server-action-with-layout-same-page/page?page=page"
            />
          </SomeComponentWithDataFetching>
        </Suspense>
      )}
    </>
  );
}
