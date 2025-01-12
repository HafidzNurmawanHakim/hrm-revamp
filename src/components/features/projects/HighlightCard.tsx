import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/modules/Accordion";
import { Button } from "@nextui-org/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Progress } from "@nextui-org/progress";
import Image from "next/image";

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
			<Accordion type="single" collapsible className="w-full mt-2">
				<AccordionItem value="item-1" className="border-none">
					<AccordionTrigger
						className="rounded-xl group w-full relative bg-soft-blue p-1 hover:no-underline flex items-center gap-3"
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
						>
							Manage
						</Button>
						<Button
							isIconOnly
							className="absolute right-2 scale-0 group-hover:scale-100 transform"
							size="sm"
							variant="light"
						>
							<ChevronDown size={18} />
						</Button>
					</AccordionTrigger>
					<AccordionContent className="p-2 space-y-1.5">
						<div className="flex items-center gap-2.5">
							<span className="w-1 rounded-full h-8 bg-zinc-300"></span>
							<div className="flex-1">
								<p>Frontend</p>
								<p className="text-zinc-500 text-xs">
									Design and generate web ui
								</p>
							</div>
							<span className="bg-zinc-300 rounded-lg px-2 py-1 text-xs">
								To Do
							</span>
						</div>
						<div className="flex items-center gap-2.5">
							<span className="w-1 rounded-full h-8 bg-blue-200"></span>
							<div className="flex-1">
								<p>Frontend</p>
								<p className="text-zinc-500 text-xs">
									Design and generate web ui
								</p>
							</div>
							<span className="bg-blue-100 text-blue-600 rounded-lg px-2 py-1 text-xs">
								In Progress
							</span>
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}

export default HighlightCard;
