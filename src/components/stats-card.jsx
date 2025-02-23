import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export function StatsCard({ value, label, icon }) {
  return (
    <Card className="bg-white hover:bg-[rgb(255,118,139)] hover:text-white cursor-pointer border border-transparent hover:border-[rgb(255,118,139)]">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-4xl font-semibold">{value}</p>
            <p className="text-sm text-muted-foreground">{label}</p>
          </div>
          <div className="text-muted-foreground">{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
}
