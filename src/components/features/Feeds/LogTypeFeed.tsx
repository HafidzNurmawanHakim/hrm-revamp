import { Separator } from "@/components/modules/Separator";
import { Button } from "@nextui-org/button";
import { User } from "@nextui-org/user";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

function LogTypeFeed() {
	return (
		<div>
			<User
				avatarProps={{
					src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
					size: "sm",
					className: "self-start",
				}}
				classNames={{
					name: "mb-1 w-full",
					wrapper: "w-full ",
					description: "w-full text-default-500 h-fit ",
					base: "w-full",
				}}
				description={
					<div className="relative">
						<p className="prose prose-p prose-sm max-w-[90%]"></p>
						<p className="absolute right-2 top-1 text-tiny">
							23:21
						</p>
						<div className="my-2">
							<p>Nice Work Dude!</p>
						</div>
						<div className="rounded-xl border p-1 flex items-center gap-3">
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
								<h3 className="text-base text-black">
									Awesome Projects
								</h3>
								<div className="flex gap-2 items-center">
									<p>Tags</p>
									<Separator
										orientation="vertical"
										className="bg-default-300 h-4"
									/>
									<span className="text-[10px] py-[2px] px-2 rounded bg-success/10 text-success">
										TASK-23
									</span>
								</div>
							</div>
							<div className="h-full mr-1">
								<Button
									size="sm"
									variant="light"
									color="primary"
									endContent={<ArrowRight size={18} />}
								>
									Visit
								</Button>
							</div>
						</div>
					</div>
				}
				name={
					<div className="flex items-center gap-2">
						<p>Your name</p>
						<span className="text-tiny text-default-500 italic">
							commented on the project you participated in
						</span>
					</div>
				}
			/>
		</div>
	);
}

export default LogTypeFeed;
