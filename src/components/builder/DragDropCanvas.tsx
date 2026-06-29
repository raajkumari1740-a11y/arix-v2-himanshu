import { Move } from "lucide-react";

export default function DragDropCanvas() {
  return (
    <div className="flex min-h-[700px] flex-col rounded-2xl border-2 border-dashed border-violet-500/40 bg-[#111827]/80 p-6 backdrop-blur-xl">

      <div className="mb-6 flex items-center gap-3">
        <Move className="text-violet-400" size={24} />
        <h2 className="text-xl font-bold text-white">
          Drag & Drop Canvas
        </h2>
      </div>

      <div className="flex flex-1 items-center justify-center rounded-xl bg-black/20">
        <div className="text-center">
          <Move
            size={60}
            className="mx-auto text-violet-400"
          />

          <h3 className="mt-4 text-2xl font-bold text-white">
            Drop Widgets Here
          </h3>

          <p className="mt-2 text-gray-400">
            Drag widgets from the library to build your dashboard.
          </p>
        </div>
      </div>

    </div>
  );
}
