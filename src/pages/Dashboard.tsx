import {
  DashboardHeader,
  DashboardGrid,
  DashboardFooter,
} from "../components/dashboard";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <DashboardHeader />

      <DashboardGrid />

      <DashboardFooter />
    </div>
  );
}
