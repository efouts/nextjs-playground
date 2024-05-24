import SomeComponentWithDataFetching from "@/components/some-component-with-data-fetching";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";

export const dynamic = "force-dynamic"; // force SomeContentWithDataFetching to be dynamic

export default function Page() {
  async function serverAction() {
    "use server";
    redirect("/server-action-with-layout-suspense/other-page");
  }

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <SomeComponentWithDataFetching sleepTime={2500}>
          <p>Page</p>
          <p>{Date.now()}</p>
          <form action={serverAction}>
            <button type="submit">Goto other page</button>
          </form>
        </SomeComponentWithDataFetching>
      </Suspense>
    </>
  );
}
