import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, YAxis } from "recharts";

type DataPoint = {
  category: string;
  value: number;
};

type ChartProps = {
  data: DataPoint[];
  className?: string;
  height?: number;
};

export default function DisplayCharts({ data, className, height = 300 }: ChartProps) {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data}>
          <XAxis dataKey="category" />
          <YAxis></YAxis>
          <Tooltip />
          <Bar dataKey="value" fill="#a94cf5ff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
