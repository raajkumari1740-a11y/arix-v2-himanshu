import MainLayout from "@/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            Arix v2 Himanshu
          </h1>

          <p className="mt-4 text-gray-400">
            Premium Pterodactyl Theme Builder
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
