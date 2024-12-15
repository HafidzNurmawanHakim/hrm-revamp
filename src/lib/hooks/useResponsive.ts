import { useState, useEffect } from "react";

export const breakpoints = {
	xs: 480,
	sm: 768,
	md: 992,
	lg: 1200,
	"2xl": 1900,
	"3xl": 2160,
};

type Breakpoint = keyof typeof breakpoints;

export const useResponsive = (breakpoint: Breakpoint): boolean => {
	const [isMatch, setIsMatch] = useState<boolean>(false);

	useEffect(() => {
		const checkMatch = () => {
			let match = window.innerWidth <= breakpoints[breakpoint];

			setIsMatch(match);
		};

		checkMatch();

		window.addEventListener("resize", checkMatch);

		return () => window.removeEventListener("resize", checkMatch);
	}, [breakpoint]);

	return isMatch;
};
