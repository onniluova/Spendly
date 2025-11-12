import React from "react";
import { Bar, BarChart } from "recharts"

type DataPoint = {
  category: string;
  value: number;
};

type ChartProps = {
  data: DataPoint[];
  className?: string;
}

export default function DisplayCharts({ data, className}: ChartProps) {
  return (
    <BarChart className={className} width={500} height={400} data={data}>
      <Bar dataKey="value" fill="#a90ca4ff"></Bar>
    </BarChart>
  );
}
