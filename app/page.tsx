import Link from "next/link";

export default function Page() {
  return (
    <>
      <p>
        <Link href="/server-action-with-layout-suspense/page">
          Server action with layout suspense
        </Link>
      </p>
      <p>
        <Link href="/server-action-with-template-suspense/page">
          Server action with template suspense
        </Link>
      </p>
      <p>
        <Link href="/route-handler-with-layout-suspense/page">
          Route handler with layout suspense
        </Link>
      </p>
      <p>
        <Link href="/server-action-with-layout-without-form/page">
          Server action with layout suspense without form
        </Link>
      </p>
      <p>
        <Link href="/server-action-with-layout-same-page/page?page=page">
          Server action with layout suspense with same page
        </Link>
      </p>
    </>
  );
}
