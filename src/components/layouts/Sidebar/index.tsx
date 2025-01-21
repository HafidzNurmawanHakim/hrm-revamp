import { useAppContext } from "@/components/context/AppContext";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/modules/Sidebar";
import { cn } from "@/lib/utils/helper";
import { Button } from "@nextui-org/button";
import {
	Brain,
	CalendarDays,
	FolderKanban,
	GraduationCap,
	Home,
	LogOut,
	MessageSquareMore,
	Newspaper,
	Settings,
	Tv,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Menu items.
const items = [
	{
		title: "Home",
		url: "/",
		icon: Home,
	},
	{
		title: "Projects",
		url: "/projects",
		icon: FolderKanban,
	},
	{
		title: "Schedule",
		url: "/schedule",
		icon: CalendarDays,
	},
	{
		title: "Message",
		url: "/message",
		icon: MessageSquareMore,
	},
	{
		title: "Settings",
		url: "/settings",
		icon: Settings,
	},
];

export function SidebarApp() {
	const { open } = useSidebar();
	const pathname = usePathname();

	return (
		<Sidebar
			collapsible="icon"
			// className="group-data-[side=left]:border-none"
		>
			<SidebarContent
				className={cn(
					"bg-background"
					// fkType === "pre_klinik" &&
					// 	"bg-gradient-to-b from-0% to-40% from-[#4BA8FF] to-background dark:from-blue-800"
				)}
			>
				<SidebarHeader className="flex items-center gap-2.5 ">
					<Image
						src={"/images/logo/logo-dark.svg"}
						width={120}
						height={120}
						alt="Logo"
						className="my-2"
					/>
				</SidebarHeader>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => {
								const isActive =
									item.url === pathname ||
									(item.url !== "/" &&
										pathname.includes(item.url));
								return (
									<SidebarMenuItem
										key={item.title}
										className={cn(!open && "pl-2.5")}
									>
										<SidebarMenuButton
											asChild
											isActive={isActive}
											className="data-[active=true]:bg-red-50 data-[active=true]:dark:bg-red-800/30 data-[active=true]:border-danger data-[active=true]:text-danger py-5"
										>
											<a href={item.url}>
												{open && (
													<span
														className={cn(
															"w-1 block h-8 rounded-full bg-red-400 dark:bg-danger opacity-0",
															isActive &&
																"opacity-100"
														)}
													></span>
												)}
												<item.icon size={"24px"} />
												<span>{item.title}</span>
											</a>
										</SidebarMenuButton>
									</SidebarMenuItem>
								);
							})}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter className="px-2.5">
				<div className="flex items-center">
					<div className="flex-1 text-sm">Logout</div>
					{/* <Button
						size={"icon"}
						variant={"secondary"}
						onClick={() => {
							deleteSession();
						}}
					>
						<LogOut />
					</Button> */}
				</div>
			</SidebarFooter>
		</Sidebar>
	);
}
