"use client";
import React, { useState, ReactNode } from "react";
import Header from "./Header";
import { useAppContext } from "../context/AppContext";
import { SidebarApp } from "./Sidebar";
import { SidebarProvider, SidebarTrigger } from "../modules/Sidebar";

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
					<main className="relative p-4 md:p-6 2xl:p-10 w-full container max-w-7xl mx-auto">
						{/* <SidebarTrigger /> */}
						{children}
					</main>
					{/* <!-- ===== Main Content End ===== --> */}
				</div>
				{/* <!-- ===== Page Wrapper End ===== --> */}
			</SidebarProvider>
		</>
	);
}
