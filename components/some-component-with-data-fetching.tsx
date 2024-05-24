function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function SomeComponentWithDataFetching({
  children,
  sleepTime,
}: {
  children: React.ReactNode;
  sleepTime: number;
}) {
  await sleep(sleepTime);
  return <>{children}</>;
}
