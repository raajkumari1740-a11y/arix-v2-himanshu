import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { time: "10:00", cpu: 20 },
  { time: "10:10", cpu: 35 },
  { time: "10:20", cpu: 28 },
  { time: "10:30", cpu: 55 },
  { time: "10:40", cpu: 42 },
  { time: "10:50", cpu: 70 },
  { time: "11:00", cpu: 48 },
];

export default function ResourceCharts() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">

      <h2 className="mb-5 text-xl font-bold text-white">
        CPU Usage
      </h2>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <XAxis dataKey="time" stroke="#8884d8" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="cpu"
              stroke="#8b5cf6"
              fill="#8b5cf6"
              fillOpacity={0.3}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}
