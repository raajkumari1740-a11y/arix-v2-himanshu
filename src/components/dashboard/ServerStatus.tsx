import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ServerStatus() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-2xl border border-green-500/20 bg-green-500/10 p-6"
    >
      <div className="flex items-center gap-3">
        <CheckCircle2 className="text-green-400" size={30} />
        <div>
          <h2 className="font-bold text-xl">Server Online</h2>
          <p className="text-green-300 text-sm">
            All services are running normally.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
