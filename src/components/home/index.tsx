"use client";

import dynamic from "next/dynamic";
import Overview from "@/components/features/overview";
import DockNav from "@/components/features/dockNav";
import UserProfileCard from "../features/user/UserProfileCard";
import HighlightCard from "../features/projects/HighlightCard";

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

				{/* Start User Profile Card */}
				<UserProfileCard />
				{/* End User Profile Card */}

				{/*Start Highlights */}
				<HighlightCard />
				{/*End Highlights */}
			</div>
		</div>
	);
}

export default index;
