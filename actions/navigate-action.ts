"use server";

import { RedirectType, redirect } from "next/navigation";

export async function navigate(path: string) {
  return redirect(path, RedirectType.replace);
}
