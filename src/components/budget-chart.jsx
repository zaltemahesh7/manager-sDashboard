import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "Over Budget", value: 25, color: "#FF6B6B" },
  { name: "On Budget", value: 35, color: "#8B8BCC" },
  { name: "Under Budget", value: 40, color: "#00BFB3" },
];

export function BudgetChart() {
  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
