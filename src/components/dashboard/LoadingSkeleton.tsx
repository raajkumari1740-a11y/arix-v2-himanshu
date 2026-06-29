export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">

      <div className="mb-6 h-6 w-48 rounded bg-gray-700" />

      <div className="space-y-4">

        <div className="h-16 rounded-xl bg-gray-800" />

        <div className="h-16 rounded-xl bg-gray-800" />

        <div className="h-16 rounded-xl bg-gray-800" />

        <div className="h-16 rounded-xl bg-gray-800" />

      </div>

    </div>
  );
}
