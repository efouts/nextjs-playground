"use client";

import { navigate } from "../actions/navigate-action";

export default function NavigateButton({
  label,
  path,
}: {
  label: string;
  path: string;
}) {
  const navigateToPath = navigate.bind(null, path);

  return (
    <>
      <button onClick={async () => await navigateToPath()}>{label}</button>
    </>
  );
}
