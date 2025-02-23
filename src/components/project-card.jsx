import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function ProjectCard({
  name,
  totalBudget,
  profitability,
  actualHours,
  totalHours,
  status,
}) {
  const getStatusColor = (status) => {
    switch (status) {
      case "over":
        return "bg-red-500";
      case "on":
        return "bg-yellow-500";
      case "under":
        return "bg-emerald-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card className= "border-transparent hover:border-[rgb(255,118,139)] bg-white">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-muted-foreground">€{totalBudget}</div>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground mb-2">
          Profitability (ROI): €{profitability}
        </div>
        <Progress
          value={(actualHours / totalHours) * 100}
          className={getStatusColor(status)}
        />
        <div className="text-sm text-muted-foreground mt-2">
          {actualHours}/{totalHours} hours
        </div>
      </CardContent>
    </Card>
  );
}
