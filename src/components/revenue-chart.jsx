import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const data = [
  { date: "19 June", value: 1000 },
  { date: "20 June", value: 2000 },
  { date: "21 June", value: 3500 },
  { date: "22 June", value: 4000 },
  { date: "23 June", value: 4500 },
  { date: "24 June", value: 5000 },
  { date: "25 June", value: 5000 },
];

export function RevenueChart() {
  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="date"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#00BFB3"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
