import {
  Home,
  Server,
  Settings,
  Users,
} from "lucide-react";

export default function IconSelector() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

      <h2 className="mb-5 text-xl font-bold">
        Icon Selector
      </h2>

      <div className="grid grid-cols-4 gap-4">

        <Home />

        <Server />

        <Settings />

        <Users />

      </div>

    </div>
  );
}
