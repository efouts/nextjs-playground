function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function SomeComponentWithDataFetching({
  children,
}: {
  children: React.ReactNode;
}) {
  await sleep(1000);
  return <>{children}</>;
}
