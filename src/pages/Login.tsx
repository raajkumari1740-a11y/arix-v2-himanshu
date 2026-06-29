import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../services/auth";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      await AuthService.login({
        email,
        password,
      });

      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-zinc-900 p-8 rounded-xl border border-zinc-800"
      >
        <h1 className="text-3xl font-bold text-white mb-6">
          Arix Panel
        </h1>

        <input
          className="w-full p-3 mb-4 rounded bg-zinc-800 text-white"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 mb-6 rounded bg-zinc-800 text-white"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded"
        >
          {loading ? "Signing In..." : "Login"}
        </button>
      </form>
    </div>
  );
}
