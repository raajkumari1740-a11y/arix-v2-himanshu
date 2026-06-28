import { StickyNote } from "lucide-react";

export default function NotesCard() {
  return (
    <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-6">
      <div className="flex items-center gap-3">
        <StickyNote />
        <h2 className="font-bold">
          Quick Notes
        </h2>
      </div>

      <textarea
        className="mt-4 h-40 w-full rounded-xl bg-black/30 p-3 outline-none"
        placeholder="Write your notes..."
      />
    </div>
  );
}
