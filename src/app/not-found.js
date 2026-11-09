import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found",
};

export default function NotFound() {
  return (
    <main className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center gap-4 py-20 text-center">
      <p className="text-7xl font-bold text-neutral-900">404</p>
      <h1 className="text-2xl font-semibold">Page Not Found</h1>
      <p className="max-w-md text-neutral-500">
        The page you are looking for doesn&apos;t exist or may have been moved.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
      >
        Back to Home
      </Link>
    </main>
  );
}
