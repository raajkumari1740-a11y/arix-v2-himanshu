import { CheckCircle2, Loader2 } from "lucide-react";

const steps = [
  { name: "Checking Package", done: true },
  { name: "Extracting Files", done: true },
  { name: "Installing Assets", done: false },
  { name: "Optimizing Theme", done: false },
  { name: "Finishing Setup", done: false },
];

export default function InstallProgress() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Installing Theme
      </h2>

      <div className="mb-6 h-3 overflow-hidden rounded-full bg-gray-700">
        <div className="h-full w-2/5 rounded-full bg-violet-600 transition-all duration-500" />
      </div>

      <div className="space-y-4">
        {steps.map((step) => (
          <div
            key={step.name}
            className="flex items-center justify-between rounded-xl bg-black/20 p-4"
          >
            <span className="text-white">
              {step.name}
            </span>

            {step.done ? (
              <CheckCircle2 className="text-green-500" size={20} />
            ) : (
              <Loader2 className="animate-spin text-violet-500" size={20} />
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
