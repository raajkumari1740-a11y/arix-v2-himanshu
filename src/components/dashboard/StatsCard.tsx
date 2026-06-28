import { ReactNode } from "react";
import { motion } from "framer-motion";

interface StatsCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  color?: string;
}

export default function StatsCard({
  title,
  value,
  icon,
  color = "from-violet-600 to-fuchsia-600",
}: StatsCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <div
        className={`absolute inset-0 opacity-10 bg-gradient-to-br ${color}`}
      />

      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">{title}</p>

          <h2 className="mt-2 text-3xl font-bold">{value}</h2>
        </div>

        <div className="rounded-xl bg-violet-600/20 p-3">
          {icon}
        </div>
      </div>
    </motion.div>
  );
}
