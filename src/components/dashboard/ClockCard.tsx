import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function ClockCard() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );

    update();
    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <Clock />
        <span className="text-gray-400">Current Time</span>
      </div>

      <h1 className="mt-5 text-4xl font-bold">{time}</h1>
    </div>
  );
}
