import { SidebarTrigger, useSidebar } from "@/components/modules/Sidebar";
import { cn } from "@/lib/utils/helper";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { AlignRight, Bell, Search } from "lucide-react";

export function Navbar() {
	const { open } = useSidebar();
	return (
		<div
			className={cn(
				"w-full z-50 bg-white h-16 fixed top-0 transition-all duration-300",
				open
					? "pre-lg:w-[calc(100vw-16rem)]"
					: "pre-lg:w-[calc(100vw-5.5rem)]"
			)}
		>
			<div className="w-full flex items-center h-full justify-between">
				<div className="flex items-center h-full w-fit px-4 gap-4 flex-1">
					<SidebarTrigger
						className="w-14"
						variant={"ghost"}
						size={"icon"}
					/>
				</div>

				<div className="flex items-center px-4 gap-2.5 hidden pre-lg:flex">
					<Button variant={"ghost"} isIconOnly>
						<Bell className="scale-125" />
					</Button>
				</div>

				<div className="flex items-center px-4 gap-2.5 pre-lg:hidden w-fit pre-sm:w-32">
					<Button
						variant={"ghost"}
						isIconOnly
						className="pre-sm:hidden"
					>
						<Search className="scale-125" />
					</Button>
					<Button variant={"ghost"} isIconOnly>
						<Bell className="scale-125" />
					</Button>
					<Button isIconOnly>
						<AlignRight className="scale-125" />
					</Button>
				</div>
			</div>
		</div>
	);
}
