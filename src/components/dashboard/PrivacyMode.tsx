import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function PrivacyMode() {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl"
    >
      {enabled ? <EyeOff size={20} /> : <Eye size={20} />}
      <span>{enabled ? "Privacy ON" : "Privacy OFF"}</span>
    </button>
  );
}
