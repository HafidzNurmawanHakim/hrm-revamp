import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function parseFormData<T extends Record<string, any>>(
	formData: FormData
): T {
	const entries = Object.fromEntries(formData.entries());
	return entries as T;
}
