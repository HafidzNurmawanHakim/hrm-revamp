"use client";

import { ChartConfig, ChartContainer } from "@/components/modules/Chart";
import {
	Label,
	PolarGrid,
	PolarRadiusAxis,
	RadialBar,
	RadialBarChart,
} from "recharts";

const chartData = [
	{ browser: "safari", visitors: 96, fill: "var(--color-safari)" },
];

const chartConfig = {
	visitors: {
		label: "Check-Ins",
	},
	safari: {
		label: "Safari",
		color: "hsl(var(--chart-2))",
	},
} satisfies ChartConfig;

interface ChartProps {
	className?: string;
}

export function RadialChart({ className }: ChartProps) {
	return (
		<ChartContainer config={chartConfig} className={className}>
			<RadialBarChart
				data={chartData}
				startAngle={0}
				endAngle={345}
				innerRadius={50}
				outerRadius={80}
			>
				<PolarGrid
					gridType="circle"
					radialLines={false}
					stroke="none"
					className="first:fill-muted last:fill-background"
					polarRadius={[56, 45]}
				/>
				<RadialBar dataKey="visitors" background cornerRadius={10} />
				<PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
					<Label
						content={({ viewBox }) => {
							if (viewBox && "cx" in viewBox && "cy" in viewBox) {
								return (
									<text
										x={viewBox.cx}
										y={viewBox.cy}
										textAnchor="middle"
										dominantBaseline="middle"
									>
										<tspan
											x={viewBox.cx}
											y={viewBox.cy}
											className="fill-foreground text-3xl font-bold"
										>
											{chartData[0].visitors.toLocaleString()}
											%
										</tspan>
										<tspan
											x={viewBox.cx}
											y={(viewBox.cy || 0) + 24}
											className="fill-muted-foreground"
										>
											Check In
										</tspan>
									</text>
								);
							}
						}}
					/>
				</PolarRadiusAxis>
			</RadialBarChart>
		</ChartContainer>
	);
}
