import React, { Suspense } from "react";
import SomeComponentWithDataFetching from "@/components/some-component-with-data-fetching";
import Navigation from "@/components/navigation";
import { redirect } from "next/navigation";

const steps = [
  {
    id: "create",
    label: "Create an account",
    content: "[Create an account form]",
    path: "/checkout-using-params?step=create",
    nextStep: "/checkout-using-params?step=assign",
  },
  {
    id: "assign",
    label: "Assign courses",
    content: "[Assign courses form]",
    path: "/checkout-using-params?step=assign",
    nextStep: "/checkout-using-params?step=shipping",
  },
  {
    id: "shipping",
    label: "Select shipping",
    content: "[Select shipping method form]",
    path: "/checkout-using-params?step=shipping",
    nextStep: "/checkout-using-params?step=payment",
  },
  {
    id: "payment",
    label: "Payment info",
    content: "[Provide payment info form]",
    path: "/checkout-using-params?step=payment",
    nextStep: "/checkout-using-params?step=create",
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
  searchParams,
}: {
  params: { step: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  async function serverAction(path: string) {
    "use server";
    //revalidatePath("/checkout-using-params");
    redirect(path);
  }

  return (
    <>
      <Navigation links={steps} />
      <ol>
        {steps.map((s) => (
          <li key={s.id}>
            {s.label}
            {searchParams.step === s.id && (
              <Suspense fallback={<p>Loading...</p>}>
                <SomeComponentWithDataFetching sleepTime={2500}>
                  <p>{s.content}</p>
                  <form action={serverAction.bind(null, s.nextStep)}>
                    <button type="submit">Do action</button>
                  </form>
                </SomeComponentWithDataFetching>
              </Suspense>
            )}
          </li>
        ))}
      </ol>
    </>
  );
}
