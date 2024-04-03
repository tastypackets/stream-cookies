import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div>
        <h1>Dashboard Page</h1>
        <p>
          If this page was streamed the cookie set from login will have been
          overwrriten by NextJS Middleware cookie set. This same problem also
          happens on NextJS with custom server.
        </p>
        <Link href={"/"} className="bg-gray-600 rounded-sm p-1">
          Return to Login
        </Link>
      </div>
    </main>
  );
}
