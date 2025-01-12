import { ScrollArea } from "@/components/common/ScrollArea";
import CardFeed from "./CardFeed";
import SystemInfo from "./SystemInfo";
import { Separator } from "@/components/modules/Separator";
import LogTypeFeed from "./LogTypeFeed";

function Index() {
	return (
		<div className="flex-1 border rounded-xl">
			<h2 className="font-semibold mx-4 mt-4">Activity Feeds</h2>
			<ScrollArea className="h-[32rem] p-4">
				<div className="flex flex-col gap-6">
					<SystemInfo />
					<LogTypeFeed />
					<CardFeed />
				</div>
			</ScrollArea>
		</div>
	);
}

export default Index;
