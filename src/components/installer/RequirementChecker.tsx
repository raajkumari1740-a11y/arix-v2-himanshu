import { CheckCircle2 } from "lucide-react";

const requirements = [
  "PHP 8.2+",
  "Node.js 20+",
  "Redis Installed",
  "Composer",
  "Storage Writable",
];

export default function RequirementChecker() {
  return (
    <div className="rounded-2xl bg-[#111827]/80 p-6 border border-white/10">
      <h2 className="mb-5 text-2xl font-bold text-white">
        System Requirements
      </h2>

      <div className="space-y-3">
        {requirements.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-lg bg-black/20 p-3"
          >
            <CheckCircle2 className="text-green-500" />
            <span className="text-white">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
