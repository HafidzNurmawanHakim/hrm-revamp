import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/modules/Chart";
import { XAxis, BarChart, Bar } from "recharts";

interface ChartProps {
	className?: string;
	config: ChartConfig;
	data: any;
}

function CustomBarChart({ className, config, data }: ChartProps) {
	return (
		<ChartContainer className={className} config={config}>
			<BarChart accessibilityLayer data={data}>
				<XAxis
					dataKey="month"
					tickLine={false}
					tickMargin={10}
					axisLine={false}
					tickFormatter={(value) => value.slice(0, 3)}
				/>
				<ChartTooltip
					cursor={false}
					content={<ChartTooltipContent indicator="dashed" />}
				/>
				<Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
				<Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
			</BarChart>
		</ChartContainer>
	);
}

export default CustomBarChart;
