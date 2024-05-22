import React from "react";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const dynamic = "force-dynamic";

const CheckoutSummary: React.FC = async () => {
  await sleep(10000);
  return <p>Checkout summary</p>;
};

export default CheckoutSummary;
