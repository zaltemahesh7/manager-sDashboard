import {
  Grid2X2,
  CheckCircle,
  RefreshCcw,
  AlertCircle,
  Users,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatsCard } from "../components/stats-card";
import { RevenueChart } from "../components/revenue-chart";
import { BudgetChart } from "../components/budget-chart";
import { ProjectCard } from "../components/project-card";
import { TeamMood } from "../components/team-mood";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function DashboardPage() {
  const [active, setActive] = useState(1);

  return (
    <div className="grid md:grid-cols-4 py-2 gap-5 lg:grid-cols-4">
      <div className="col-span-3 flex-1 space-y-4">
        <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-5">
          <StatsCard
            value={5}
            label="Total Projects"
            icon={<Grid2X2 className="h-4 w-4" />}
          />
          <StatsCard
            value={1}
            label="Completed"
            icon={<CheckCircle className="h-4 w-4" />}
          />
          <StatsCard
            value={3}
            label="Ongoing"
            icon={<RefreshCcw className="h-4 w-4" />}
          />
          <StatsCard
            value={1}
            label="Delayed"
            icon={<AlertCircle className="h-4 w-4 text-red-500" />}
          />
          <StatsCard
            value={5}
            label="Employees"
            icon={<Users className="h-4 w-4" />}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 border border-transparent hover:border-[rgb(255,118,139)] bg-white">
            <CardHeader>
              <CardTitle>Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <RevenueChart />
            </CardContent>
          </Card>
          <Card className="col-span-3 border border-transparent hover:border-[rgb(255,118,139)] bg-white">
            <CardHeader>
              <CardTitle>Budget Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <BudgetChart />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <div className="col-span-7 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Budget status</h2>
            <div className="flex items-center space-x-2">
              <Button
                className={active === 1 && `bg-[rgb(1,141,133)] text-white`}
                variant="outline"
                onClick={() => setActive(1)}
              >
                Add New Project
              </Button>
              <Button
                className={active === 2 && `bg-[rgb(1,141,133)] text-white`}
                variant="outline"
                onClick={() => setActive(2)}
                >
                Download report
              </Button>
              <input
                className={`${active === 3 && `bg-[rgb(1,141,133)] text-white h-8` } border p-1 rounded-md`}
                onClick={() => setActive(3)}
                type="date"
                
              />
                
              <Button
                className={active === 4 && `bg-[rgb(1,141,133)] text-white`}
                variant="outline"
                onClick={() => setActive(4)}
              >
                Filter
              </Button>
            </div>
          </div>
          <div className="col-span-7">
            <div className="grid gap-4 mt-4 md:grid-cols-3">
              <ProjectCard
                name="Insurance App"
                totalBudget={70000}
                profitability={-2500}
                actualHours={100}
                totalHours={80}
                status="over"
              />
              <ProjectCard
                name="VR Website"
                totalBudget={70000}
                profitability={4000}
                actualHours={100}
                totalHours={120}
                status="under"
              />
              <ProjectCard
                name="VR Website"
                totalBudget={70000}
                profitability={4000}
                actualHours={100}
                totalHours={120}
                status="under"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 border-red-500 h-full w-full">
        <div className="">
          <TeamMood />
        </div>
      </div>
    </div>
  );
}
