import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/modules/Accordion";
import { Button } from "@nextui-org/button";
import { ArrowRight, CalendarDays, ChevronDown } from "lucide-react";
import { Progress } from "@nextui-org/progress";
import Image from "next/image";
import Link from "next/link";

function HighlightCard() {
	return (
		<div className="rounded-xl p-2.5 mt-4 border">
			<div className="flex items-center justify-between">
				<h3 className="my-1 mx-1 font-medium">Highlights</h3>
				<Button
					size="sm"
					radius="full"
					color="primary"
					variant="light"
					className="text-xs"
					endContent={<ArrowRight size={16} />}
				>
					See All
				</Button>
			</div>
			<Accordion
				type="single"
				collapsible
				className="w-full mt-2 space-y-2"
				defaultValue="item-1"
			>
				<AccordionItem value="item-1" className="border-none">
					<AccordionTrigger
						className="rounded-xl group w-full relative bg-soft-blue p-1.5 hover:no-underline flex items-center gap-3"
						showIcon={false}
					>
						<Image
							src={
								"https://i.pravatar.cc/150?u=a04258114e29026702d"
							}
							alt="project-icon"
							width={50}
							height={50}
							className="rounded-lg"
						/>
						<div className="flex-1">
							<h3 className="text-black">
								Awesome Projects
								<span className="text-warning mx-2">30%</span>
							</h3>
							<div className="flex gap-2 items-center max-w-[80%] mt-2">
								<Progress
									aria-label="Loading..."
									size="sm"
									value={30}
									color="warning"
								/>
							</div>
						</div>
						<Button
							size="sm"
							color="success"
							variant="bordered"
							className="mr-2 transform group-hover:-translate-x-8 z-10"
							as={Link}
							href="/projects"
						>
							Manage
						</Button>

						<div
							role="button"
							className="absolute right-4 scale-0 group-hover:scale-100 transition-scale duration-300"
						>
							<ChevronDown size={18} />
						</div>
					</AccordionTrigger>
					<AccordionContent className="p-2 mt-2 space-y-4">
						<div className="relative pl-4 bg-red-50 rounded-lg p-2">
							<span className="w-1 absolute left-0 top-0 rounded-full h-full bg-red-300"></span>
							<div className="space-y-2.5">
								<p className="flex items-center justify-between">
									Frontend
									<span className="bg-blue-100 text-blue-600 rounded-lg px-2 py-1 text-xs">
										In Progress
									</span>
								</p>
								<p className="text-zinc-500 text-sm line-clamp-2">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Voluptas, expedita,
									doloribus repellendus eaque...
								</p>
								<Progress
									aria-label="Loading..."
									size="sm"
									label="Progress"
									value={70}
									color="danger"
									classNames={{
										label: "text-danger",
										value: "text-danger",
									}}
									showValueLabel
								/>
								<div className="flex justify-between">
									<p className="text-danger bg-red-100 px-2 rounded-lg flex text-xs items-center gap-2.5">
										<CalendarDays size={16} />
										Today
									</p>
									<Button
										size="sm"
										className="bg-blue-200 text-blue-500"
										variant="flat"
									>
										Update
									</Button>
								</div>
							</div>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2" className="border-none">
					<AccordionTrigger
						className="rounded-xl group w-full relative bg-soft-blue p-1.5 hover:no-underline flex items-center gap-3"
						showIcon={false}
					>
						<Image
							src={
								"https://i.pravatar.cc/150?u=a04258114e29026702d"
							}
							alt="project-icon"
							width={50}
							height={50}
							className="rounded-lg"
						/>
						<div className="flex-1">
							<h3 className="text-black">
								Awesome Projects
								<span className="text-success mx-2">80%</span>
							</h3>
							<div className="flex gap-2 items-center max-w-[80%] mt-2">
								<Progress
									aria-label="Loading..."
									size="sm"
									value={80}
									color="success"
								/>
							</div>
						</div>
						<Button
							size="sm"
							color="success"
							variant="bordered"
							className="mr-2 transform group-hover:-translate-x-8 z-10"
							as={Link}
							href="/projects"
						>
							Manage
						</Button>

						<div
							role="button"
							className="absolute right-4 scale-0 group-hover:scale-100 transition-scale duration-300"
						>
							<ChevronDown size={18} />
						</div>
					</AccordionTrigger>
					<AccordionContent className="p-2 mt-2 space-y-4">
						<div className="relative pl-4 p-2 rounded-lg bg-blue-50">
							<span className="w-1 absolute left-0 top-0 rounded-full h-full bg-blue-300"></span>
							<div className="space-y-2.5">
								<p className="flex items-center justify-between">
									Frontend
									<span className="bg-blue-100 text-blue-600 rounded-lg px-2 py-1 text-xs">
										In Progress
									</span>
								</p>
								<p className="text-zinc-500 text-sm line-clamp-2">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Voluptas, expedita,
									doloribus repellendus eaque...
								</p>
								<Progress
									aria-label="Loading..."
									size="sm"
									label="Progress"
									value={70}
									classNames={{
										indicator: "bg-blue-500",
										label: "text-blue-500",
										value: "text-blue-500",
									}}
									showValueLabel
								/>
								<div className="flex justify-between">
									<p className="text-blue-500 bg-blue-100 px-2 text-xs rounded-lg flex items-center gap-2.5">
										<CalendarDays size={16} />
										Aug, 23
									</p>
									<Button
										size="sm"
										className="bg-blue-200 text-blue-500"
										variant="flat"
									>
										Update
									</Button>
								</div>
							</div>
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}

export default HighlightCard;
