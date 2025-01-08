"use client";
import React from "react";
import { SidebarApp } from "./Sidebar";
import { SidebarProvider } from "../modules/Sidebar";
import { Navbar } from "./Navbar";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<SidebarProvider>
				{/* <!-- ===== Page Wrapper Start ===== --> */}
				<div className="flex w-full">
					{/* <!-- ===== Sidebar Start ===== --> */}
					<SidebarApp />
					{/* <!-- ===== Sidebar End ===== --> */}

					{/* <!-- ===== Main Content Start ===== --> */}
					<main className="relative w-full container max-w-7xl mx-auto bg-background">
						<div className="p-1.5 md:p-4">{children}</div>
					</main>
					{/* <!-- ===== Main Content End ===== --> */}
				</div>
				{/* <!-- ===== Page Wrapper End ===== --> */}
			</SidebarProvider>
		</>
	);
}
