import { CalendarDays } from "lucide-react";

export default function CalendarWidget() {
  const today = new Date();

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">

      <div className="mb-6 flex items-center gap-3">
        <CalendarDays
          size={22}
          className="text-violet-400"
        />

        <h2 className="text-xl font-bold text-white">
          Calendar
        </h2>
      </div>

      <div className="rounded-xl bg-black/20 p-6 text-center">

        <p className="text-sm uppercase tracking-widest text-gray-400">
          Today
        </p>

        <h1 className="mt-3 text-5xl font-bold text-white">
          {today.getDate()}
        </h1>

        <p className="mt-2 text-lg text-violet-300">
          {today.toLocaleDateString(undefined, {
            weekday: "long",
            month: "long",
            year: "numeric",
          })}
        </p>

      </div>

    </div>
  );
}
