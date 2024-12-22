import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import { User } from "@nextui-org/user";
import { Heart } from "lucide-react";

function FeedComment() {
	return (
		<div className="w-full">
			<div className="my-2">
				<User
					avatarProps={{
						src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
						size: "sm",
						className: "self-start",
					}}
					classNames={{
						name: "mb-1 w-full",
						wrapper: "w-full bg-blue-100/30 p-2 rounded-xl",
						description: "w-full text-default-500 h-fit",
						base: "w-full",
					}}
					description={
						<div className="relative">
							<p className="prose prose-p prose-sm max-w-[90%]">
								Good jobs Good jobs Good jobs Good jobs Good
							</p>
							<p className="absolute right-2 bottom-0 text-tiny">
								23:21
							</p>
						</div>
					}
					name={
						<div className="relative">
							<p>Jane Doe</p>
							<Button
								isIconOnly
								className="absolute right-0 top-0"
								variant="light"
								size="sm"
							>
								<Heart
									size={15}
									className="text-danger fill-current"
								/>
							</Button>
						</div>
					}
				/>
			</div>
			<Textarea fullWidth placeholder="Give feedback..." maxRows={2} />
		</div>
	);
}

export default FeedComment;
