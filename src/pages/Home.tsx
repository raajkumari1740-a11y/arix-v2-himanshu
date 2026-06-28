import DashboardLayout from "@/layouts/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-4xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="text-gray-400 mt-2">
            Manage your Pterodactyl Theme Builder from one dashboard.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-gray-400">CPU Usage</h3>
            <h1 className="mt-4 text-3xl font-bold">24%</h1>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-gray-400">RAM Usage</h3>
            <h1 className="mt-4 text-3xl font-bold">3.2 GB</h1>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-gray-400">Disk</h3>
            <h1 className="mt-4 text-3xl font-bold">128 GB</h1>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-gray-400">Online Users</h3>
            <h1 className="mt-4 text-3xl font-bold">248</h1>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
