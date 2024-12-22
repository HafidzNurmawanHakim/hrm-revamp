import { Separator } from "@/components/modules/Separator";
import { useSidebar } from "@/components/modules/Sidebar";
import { Button } from "@nextui-org/button";
import {
	Bell,
	Calendar,
	MessageSquareMore,
	PanelLeft,
	Search,
	User,
} from "lucide-react";

function Index() {
	const { toggleSidebar } = useSidebar();
	return (
		<div className="w-full rounded-2xl h-16 border flex items-center gap-2 px-4">
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
			<Button
				isIconOnly
				color="primary"
				variant="light"
				radius="full"
				onPress={toggleSidebar}
				className="text-black hover:text-primary"
			>
				<Search size={18} />
			</Button>
			<Button
				isIconOnly
				color="primary"
				variant="light"
				radius="full"
				onPress={toggleSidebar}
				className="text-black hover:text-primary"
			>
				<Bell size={18} />
			</Button>
			<Button
				isIconOnly
				color="primary"
				variant="light"
				radius="full"
				onPress={toggleSidebar}
				className="text-black hover:text-primary"
			>
				<MessageSquareMore size={18} />
			</Button>
			<Button
				isIconOnly
				color="primary"
				variant="light"
				radius="full"
				onPress={toggleSidebar}
				className="text-black hover:text-primary"
			>
				<User size={18} />
			</Button>
			<Separator orientation="vertical" className="border h-1/2" />
			<Button
				startContent={<Calendar size={18} />}
				size="sm"
				radius="full"
				fullWidth
				className="bg-red-100 text-red-600"
			>
				23 August
			</Button>
		</div>
	);
}

export default Index;
