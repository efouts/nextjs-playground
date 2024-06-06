import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  console.log(request);
  const path = request.nextUrl.searchParams.get("path");

  if (!path) return new Response("Missing path", { status: 400 });

  redirect(path);
}
