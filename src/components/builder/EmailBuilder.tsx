export default function EmailBuilder() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

      <h2 className="text-xl font-bold">
        Email Builder
      </h2>

      <textarea
        className="mt-5 h-64 w-full rounded-xl bg-black/20 p-4 outline-none"
        placeholder="Write Email HTML..."
      />

    </div>
  );
}
