import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "staging-admin.langsungjalan",
			},
			{
				protocol: "https",
				hostname: "yapindo-cdn.b-cdn.net",
			},
			{
				protocol: "https",
				hostname: "picsum.photos",
			},
			{
				protocol: "https",
				hostname: "i.pravatar.cc",
			},
		],
	},
};

export default nextConfig;
