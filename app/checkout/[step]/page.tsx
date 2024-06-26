import React, { Suspense } from "react";
import SomeComponentWithDataFetching from "@/components/some-component-with-data-fetching";
import Navigation from "@/components/navigation";
import { RedirectType, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const steps = [
  {
    id: "create",
    label: "Create an account",
    content: "[Create an account form]",
    path: "/checkout/create",
    nextStep: "/checkout/assign",
  },
  {
    id: "assign",
    label: "Assign courses",
    content: "[Assign courses form]",
    path: "/checkout/assign",
    nextStep: "/checkout/shipping",
  },
  {
    id: "shipping",
    label: "Select shipping",
    content: "[Select shipping method form]",
    path: "/checkout/shipping",
    nextStep: "/checkout/payment",
  },
  {
    id: "payment",
    label: "Payment info",
    content: "[Provide payment info form]",
    path: "/checkout/payment",
    nextStep: "/checkout/create",
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
  async function serverAction(path: string) {
    "use server";
    revalidatePath("/");
    redirect(path, RedirectType.push);
  }

  return (
    <>
      <Navigation links={steps} />
      <ol>
        {steps.map((s) => (
          <li key={s.id}>
            {s.label}
            {params.step === s.id && (
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
