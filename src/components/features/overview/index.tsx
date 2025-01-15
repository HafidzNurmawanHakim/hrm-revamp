import CustomBarChart from "@/components/common/charts/BarChart";
import CustomLineChart from "@/components/common/charts/CustomLineChart";
import { ChartConfig } from "@/components/modules/Chart";
import { Button } from "@nextui-org/button";
import { Plus, X } from "lucide-react";

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

function Index() {
	return (
		<div className="w-full rounded-2xl h-56 border flex flex-col justify-evenly">
			<div className="px-4  flex justify-between items-center">
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
					<Button size="sm" radius="full" isIconOnly variant="light">
						<X size={18} />
					</Button>
				</div>
			</div>
			<div className="px-4">
				<h3 className="font-light text-gray-400 text-sm">
					Your Summary Activities
				</h3>
				<CustomLineChart
					config={chartConfig}
					data={chartData}
					className="w-full h-36"
				/>
			</div>
		</div>
	);
}

export default Index;
