"use client";

import dynamic from "next/dynamic";
import Overview from "@/components/features/overview";
import DockNav from "@/components/features/dockNav";
import { User } from "@nextui-org/user";
import { days } from "@/lib/data/common";
import { Button } from "@nextui-org/button";
import { ArrowRight, Plus } from "lucide-react";
import { RadialChart } from "../common/charts/RadialBarChart";

const FeedsSection = dynamic(() => import("@/components/features/Feeds"), {
	ssr: false,
});

function index() {
	return (
		<div className="flex w-full gap-3">
			<div className="w-3/5 gap-4 flex flex-col">
				{/* Start Overview card */}
				<Overview />
				{/* End Overview card */}

				{/* Begin Activity Feeds */}
				<FeedsSection />
				{/* Ends Activity Feeds */}
			</div>
			<div className="flex-1">
				{/* Start Dock Navbar */}
				<DockNav />
				{/* End Dock Navbar */}
				<div className="w-full rounded-2xl h-40 overflow-hidden mt-4 flex border">
					<div className="flex-1 p-2.5 flex flex-col justify-around items-start">
						<User
							avatarProps={{
								src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
							}}
							description="Product Designer"
							name="Jane Doe"
						/>
						<div className="flex flex-wrap justify-center gap-1.5">
							{days
								.filter((item) => !item.isWeekend)
								.map((item, idx) => (
									<div
										className="p-1 bg-green-100 size-10 rounded-full text-green-700 flex items-center justify-center"
										key={`days_${idx}`}
									>
										{item.name[0]}
									</div>
								))}
						</div>
						<div className="flex gap-1.5">
							<Button
								startContent={<Plus size={18} />}
								size="sm"
								radius="full"
								color="success"
								variant="flat"
							>
								Attendance
							</Button>
							<Button
								size="sm"
								radius="full"
								color="primary"
								variant="light"
								endContent={<ArrowRight size={18} />}
							>
								See All
							</Button>
						</div>
					</div>
					<div className="w-40 bg-gradient-to-r from-transparent to-success-100 rounded-2xl h-full">
						<RadialChart className="mx-auto aspect-square w-full h-full" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default index;
