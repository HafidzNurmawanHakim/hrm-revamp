"use client";

import { Button } from "@nextui-org/button";
import { Calendar, PanelLeft, Plus } from "lucide-react";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "../modules/Chart";
import { Area, AreaChart, XAxis } from "recharts";
import { useSidebar } from "../modules/Sidebar";

const chartData = [
	{ month: "Sunday", desktop: 106, mobile: 80 },
	{ month: "Monday", desktop: 186, mobile: 80 },
	{ month: "Tuesday", desktop: 305, mobile: 200 },
	{ month: "Wednesday", desktop: 237, mobile: 120 },
	{ month: "Thursday", desktop: 73, mobile: 190 },
	{ month: "Friday", desktop: 209, mobile: 130 },
	{ month: "Saturday", desktop: 214, mobile: 140 },
];
const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "hsl(var(--chart-1))",
	},
	mobile: {
		label: "Mobile",
		color: "hsl(var(--chart-2))",
	},
} satisfies ChartConfig;

function index() {
	const { toggleSidebar } = useSidebar();

	return (
		<div className="flex w-full gap-3">
			<div className="w-3/5">
				{/* Start Overview card */}
				<div className="w-full rounded-2xl h-64 bg-blue-100/20">
					<div className="p-4 pb-2 flex justify-between items-center">
						<h3 className="text-2xl">Good Morning, Hafidz</h3>
						<div className="flex gap-2">
							<Button
								startContent={<Plus size={18} />}
								size="sm"
								radius="full"
								className="bg-blue-100 text-blue-600"
							>
								Task
							</Button>
							<Button
								startContent={<Calendar size={18} />}
								size="sm"
								radius="full"
								className="bg-red-100 text-red-600"
							>
								23 Aug
							</Button>
						</div>
					</div>
					<div className="px-4">
						<h3 className="font-light text-gray-400">
							Your Summary Activities
						</h3>
						<ChartContainer
							config={chartConfig}
							className="h-36 w-full"
						>
							<AreaChart
								accessibilityLayer
								data={chartData}
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
									content={<ChartTooltipContent />}
								/>
								<defs>
									<linearGradient
										id="fillDesktop"
										x1="0"
										y1="0"
										x2="0"
										y2="1"
									>
										<stop
											offset="5%"
											stopColor="var(--color-desktop)"
											stopOpacity={0.8}
										/>
										<stop
											offset="95%"
											stopColor="var(--color-desktop)"
											stopOpacity={0.1}
										/>
									</linearGradient>
									<linearGradient
										id="fillMobile"
										x1="0"
										y1="0"
										x2="0"
										y2="1"
									>
										<stop
											offset="5%"
											stopColor="var(--color-mobile)"
											stopOpacity={0.8}
										/>
										<stop
											offset="95%"
											stopColor="var(--color-mobile)"
											stopOpacity={0.1}
										/>
									</linearGradient>
								</defs>
								<Area
									dataKey="mobile"
									type="natural"
									fill="url(#fillMobile)"
									fillOpacity={0.4}
									stroke="var(--color-mobile)"
									stackId="a"
								/>
								<Area
									dataKey="desktop"
									type="natural"
									fill="url(#fillDesktop)"
									fillOpacity={0.4}
									stroke="var(--color-desktop)"
									stackId="a"
								/>
							</AreaChart>
						</ChartContainer>
					</div>
				</div>
				{/* End Overview card */}
			</div>
			<div className="flex-1">
				<div className="w-full rounded-2xl h-16 border border-[#f5f8fa] flex items-center gap-4 px-4">
					<Button
						isIconOnly
						color="primary"
						variant="light"
						radius="full"
						onPress={toggleSidebar}
						className="text-black hover:text-primary"
					>
						<PanelLeft size={18} />
					</Button>
				</div>
			</div>
		</div>
	);
}

export default index;
