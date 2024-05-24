import SomeComponentWithDataFetching from "@/components/some-component-with-data-fetching";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";

export const dynamic = "force-dynamic"; // force SomeContentWithDataFetching to be dynamic

export default function Page() {
  async function serverAction() {
    "use server";
    redirect("/server-action-with-layout-suspense/page");
  }

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <SomeComponentWithDataFetching sleepTime={2500}>
          <p>Other page</p>
          <p>{Date.now()}</p>
          <form action={serverAction}>
            <button type="submit">Goto page</button>
          </form>
        </SomeComponentWithDataFetching>
      </Suspense>
    </>
  );
}
