import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
          Arix v2 Himanshu
        </h1>

        <p className="mt-4 text-gray-400">
          Premium Pterodactyl Theme Builder
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
