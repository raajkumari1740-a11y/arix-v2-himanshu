import { Heart } from "lucide-react";

export default function DashboardFooter() {
  return (
    <footer className="mt-8 rounded-2xl border border-white/10 bg-[#111827]/80 p-5 backdrop-blur-xl">
      <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
        <div>
          <h3 className="text-lg font-bold text-white">
            Arix v2 Himanshu
          </h3>

          <p className="text-sm text-gray-400">
            Premium Pterodactyl Theme
          </p>
        </div>

        <div className="flex items-center gap-2 text-gray-400">
          <span>Made with</span>

          <Heart
            size={18}
            className="fill-red-500 text-red-500"
          />

          <span>by Himanshu</span>
        </div>
      </div>
    </footer>
  );
}
