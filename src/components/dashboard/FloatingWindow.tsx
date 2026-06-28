import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  children: ReactNode;
}

export default function FloatingWindow({
  title,
  children,
}: Props) {
  return (
    <motion.div
      drag
      dragMomentum={false}
      className="rounded-2xl border border-white/10 bg-[#111827]/90 p-5 shadow-2xl backdrop-blur-xl"
    >
      <h2 className="mb-4 text-lg font-bold">
        {title}
      </h2>

      {children}
    </motion.div>
  );
}
