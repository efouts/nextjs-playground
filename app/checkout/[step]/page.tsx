import React, { Suspense } from "react";
import SomeComponentWithDataFetching from "./components/some-component-with-data-fetching";
import Navigation from "./components/navigation";

const steps = [
  {
    id: "create",
    label: "Create an account",
    content: "[Create an account form]",
    path: "/checkout/create",
  },
  {
    id: "assign",
    label: "Assign courses",
    content: "[Assign courses form]",
    path: "/checkout/assign",
  },
  {
    id: "shipping",
    label: "Select shipping",
    content: "[Select shipping method form]",
    path: "/checkout/shipping",
  },
  {
    id: "payment",
    label: "Payment info",
    content: "[Provide payment info form]",
    path: "/checkout/payment",
  },
];

export async function generateStaticParams() {
  return steps.map((s) => ({
    step: s.id,
  }));
}

export const dynamic = "force-dynamic"; // force SomeContentWithDataFetching to be dynamic

export default function Page({
  params,
}: {
  params: { step: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <Navigation links={steps} />
      <ol>
        {steps.map((s) => (
          <li key={s.id}>
            {s.label}
            {params.step === s.id && (
              <Suspense fallback={<p>Loading...</p>}>
                <SomeComponentWithDataFetching>
                  <p>{s.content}</p>
                </SomeComponentWithDataFetching>
              </Suspense>
            )}
          </li>
        ))}
      </ol>
    </>
  );
}
