import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/modules/Sidebar";
import { cn } from "@/lib/utils/helper";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import Image from "next/image";

// Menu items.
const items = [
	{
		title: "Home",
		url: "#",
		icon: Home,
	},
	{
		title: "Inbox",
		url: "#",
		icon: Inbox,
	},
	{
		title: "Calendar",
		url: "#",
		icon: Calendar,
	},
	{
		title: "Search",
		url: "#",
		icon: Search,
	},
	{
		title: "Settings",
		url: "#",
		icon: Settings,
	},
];

export function SidebarApp() {
	const { open } = useSidebar();
	return (
		<Sidebar collapsible="icon">
			<SidebarContent>
				<SidebarHeader className="flex items-center gap-2.5">
					<Image
						src={"/images/logo/logo-dark.svg"}
						width={120}
						height={120}
						alt="Logo"
						className="my-2"
					/>
				</SidebarHeader>
				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
					<SidebarGroupContent
						className={cn(open ? "px-4" : "px-2.5")}
					>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
