import { Separator } from "@/components/modules/Separator";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import { User } from "@nextui-org/user";
import {
	EllipsisVertical,
	Forward,
	Heart,
	MessageCircle,
	MessageCircleMore,
} from "lucide-react";
import Image from "next/image";
import FeedComment from "./FeedComment";

function CardFeed() {
	return (
		<div className="">
			{/* Start Header Content */}
			<div className="flex justify-between items-center">
				<User
					avatarProps={{
						src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
					}}
					description="Product Designer"
					name="Jane Doe"
				/>
				<Button isIconOnly size="sm" variant="light">
					<EllipsisVertical />
				</Button>
			</div>
			{/* End Header Content */}

			{/* Start Content */}
			<div className="prose my-2">
				<p className="prose-p prose-sm">
					Finally, i have fucking up this code to production!
				</p>
			</div>
			<div className="w-full rounded-xl relative aspect-square">
				<Image
					src={"/images/feeds/code.png"}
					alt="code"
					fill
					className="object-contain rounded-xl"
				/>
			</div>
			{/* End Content */}

			{/* Start Feed Actions */}
			<div className="flex items-center justify-between rounded-xl">
				<div></div>
				<div className="flex items-center gap-3 p-2">
					<div className="flex items-center gap-1">
						<p className="text-sm">15.2k</p>
						<Button
							variant="light"
							isIconOnly
							radius="full"
							size="sm"
						>
							<Heart size={20} />
						</Button>
					</div>
					<div className="flex items-center gap-1">
						<p className="text-sm">15.2k</p>
						<Button
							variant="light"
							isIconOnly
							radius="full"
							size="sm"
						>
							<MessageCircleMore size={20} />
						</Button>
					</div>
					<div className="flex items-center gap-1">
						<p className="text-sm">15.2k</p>
						<Button
							variant="light"
							isIconOnly
							radius="full"
							size="sm"
						>
							<Forward size={20} />
						</Button>
					</div>
				</div>
			</div>
			{/* End Feed Actions */}

			{/* Start Comment Feed */}
			<FeedComment />
			{/* End Comment Feed */}
		</div>
	);
}

export default CardFeed;
