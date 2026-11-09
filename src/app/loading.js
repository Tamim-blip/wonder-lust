export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-neutral-200 border-t-neutral-900"></div>
      <p className="text-sm text-neutral-500">Loading...</p>
    </div>
  );
}
