import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeSwitcher() {
  const [dark, setDark] = useState(true);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl transition hover:bg-white/10"
    >
      {dark ? <Moon size={20} /> : <Sun size={20} />}
      <span>{dark ? "Dark Mode" : "Light Mode"}</span>
    </button>
  );
}
