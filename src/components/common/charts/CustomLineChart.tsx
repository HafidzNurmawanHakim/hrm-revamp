import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/modules/Chart";
import {
	Area,
	AreaChart,
	CartesianGrid,
	Line,
	LineChart,
	XAxis,
} from "recharts";

interface ChartProps {
	className?: string;
	config: ChartConfig;
	data: any;
}

function CustomLineChart({ config, data, className }: ChartProps) {
	return (
		<ChartContainer config={config} className={className}>
			<LineChart
				accessibilityLayer
				data={data}
				margin={{
					left: 12,
					right: 12,
				}}
			>
				<XAxis
					dataKey="month"
					tickLine={false}
					axisLine={false}
					tickMargin={8}
					tickFormatter={(value) => value.slice(0, 3)}
				/>
				<ChartTooltip
					cursor={false}
					content={<ChartTooltipContent hideLabel />}
				/>
				<Line
					dataKey="desktop"
					type="natural"
					stroke="var(--color-desktop)"
					strokeWidth={2}
					dot={{
						fill: "var(--color-desktop)",
					}}
					activeDot={{
						r: 6,
					}}
				/>
			</LineChart>
		</ChartContainer>
	);
}

export default CustomLineChart;
