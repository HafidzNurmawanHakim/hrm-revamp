"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import Overview from "@/components/features/overview";
import DockNav from "@/components/features/dockNav";

const FeedsSection = dynamic(() => import("@/components/features/Feeds"), {
	ssr: false,
});

function index() {
	return (
		<div className="flex w-full gap-3">
			<div className="w-3/5 gap-4 flex flex-col">
				{/* Start Overview card */}
				<Overview />
				{/* End Overview card */}

				{/* Begin Activity Feeds */}
				<FeedsSection />
				{/* Ends Activity Feeds */}
			</div>
			<div className="flex-1">
				{/* Start Dock Navbar */}
				<DockNav />
				{/* End Dock Navbar */}
				<div className="w-full rounded-2xl h-40 overflow-hidden mt-4 relative">
					<div className="absolute size-full h-1/2 top-0 left-0 text-white p-2 bg-gradient-to-bl from-[#86efac]/30 via-[#fcd34d]/30 to-[#f9a8d4]/30"></div>
					<div className="size-full absolute z-10 left top-0 flex justify-between">
						<div>
							<h2>Hafidz Nurmawan</h2>
						</div>
						<div className="w-24 h-full flex items-center">
							<Image
								src={"/images/user/user-01.png"}
								alt="user"
								height={80}
								width={80}
								className="bg-white p-1 rounded-full"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default index;
