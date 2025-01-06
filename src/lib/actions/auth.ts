"use server";

import { ZodError } from "zod";
import { loginSchema } from "../schema/auth";
import { Login, LoginCred } from "../services/auth";
import { decrypt, encrypt, parseFormData } from "../utils";
import { AxiosError } from "axios";
import { User } from "../types/auth";
import { cookies } from "next/headers";
import { cache } from "react";
import { redirect } from "next/navigation";

type LoginResponse = {
	errorFields: Record<string, string[] | undefined> | null;
	data: User | null;
	meta: {
		status: number;
		message: string;
	};
};

async function SubmitLogin(_: any, payload: FormData): Promise<LoginResponse> {
	try {
		const { username, password } = parseFormData<LoginCred>(payload);
		loginSchema.parse({ username, password });
		const response = await Login({ username, password });
		const user = response.data;

		if (user) {
			const token = await encrypt(user);
			(await cookies()).set("session", token);
		}
		return response;
	} catch (error) {
		if (error instanceof ZodError) {
			return {
				errorFields: error.flatten().fieldErrors,
				data: null,
				meta: {
					status: 422,
					message: "Validation errors",
				},
			};
		}

		if (error instanceof AxiosError) {
			return { ...error.response?.data, errorFields: null };
		}

		return {
			errorFields: null,
			data: null,

			meta: {
				status: 500,
				message: "An unexpected error occurred",
			},
		};
	}
}

const verifySession = cache(async () => {
	const cookie = (await cookies()).get("session")?.value;
	const session = await decrypt(cookie);
	if (!session) {
		redirect("/login");
	}

	return session;
});

const getSession = cache(async () => {
	try {
		const session = await verifySession();
		if (!session) return null;
		return session;
	} catch (error) {
		console.log("Failed to fetch user");
		return null;
	}
});

export { SubmitLogin, verifySession, getSession };
