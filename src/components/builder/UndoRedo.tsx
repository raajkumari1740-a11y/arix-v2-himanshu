import { Undo2, Redo2 } from "lucide-react";

export default function UndoRedo() {
  return (
    <div className="flex gap-4 rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">
      <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 text-white hover:bg-violet-700">
        <Undo2 size={20} />
        Undo
      </button>

      <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 py-3 text-white hover:bg-green-700">
        <Redo2 size={20} />
        Redo
      </button>
    </div>
  );
}
