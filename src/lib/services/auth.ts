import axios, { AxiosError, AxiosRequestConfig } from "axios";
import toast from "react-hot-toast";

// import {
// 	CreateNewPasswordFormData,
// 	ForgotPasswordFormData,
// 	UpdatePasswordFormData,
// } from "../schemas/auth";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_PROD as string;

export interface LoginCred {
	username: string;
	password: string;
}
export interface RegistCred {
	name: string;
	email: string;
	asn_type: string;
	asn_formation: string;
	phone: string;
	password: string;
	password_confirmation: string;
}

export const Login = async (cred: LoginCred) => {
	try {
		const response = await axios.post(`${baseUrl}/auth/login/AKUASN`, cred);

		return response.data;
	} catch (error) {
		if (error instanceof AxiosError) {
			return error.response?.data;
		} else {
			// If error is not an instance of AxiosError, return a general error message
			return {
				data: null,
				meta: {
					success: false,
					status: null,
					message:
						"An unknown error occurred. Please try again later.",
				},
			};
		}
	}
};
// export const Register = async (cred: RegistCred) => {
// 	try {
// 		const response = await axios.post(
// 			`${baseUrl}/auth/register/AKUASN`,
// 			cred,
// 		);

// 		return response;
// 	} catch (error) {
// 		if (error instanceof AxiosError) {
// 			const status = error.response?.status;

// 			switch (status) {
// 				case 422:
// 					toast("Pending activation: Please verify using OTP");

// 					return {
// 						success: false,
// 						data: error.response?.data,
// 						status,
// 						message:
// 							"Menunggu Aktivasi, verifikasi dengan kode OTP yang sudah dikirim!",
// 					};
// 				case 400:
// 					return {
// 						success: false,
// 						data: error.response?.data,
// 						status,
// 						message: "Email atau Nomor WhatsApp sudah terdaftar",
// 					};
// 				default:
// 					return {
// 						success: false,
// 						data: error.response?.data,
// 						status,
// 						message:
// 							error.message ||
// 							"An unexpected error occurred. Please try again later.",
// 					};
// 			}
// 		} else {
// 			return {
// 				success: false,
// 				status: null,
// 				message: "An unknown error occurred. Please try again later.",
// 			};
// 		}
// 	}
// };

// export const verifyOtp = async (body: { username: string; code: string }) => {
// 	try {
// 		const response = await axios.post(
// 			`${baseUrl}/auth/otp/AKUASN/${body.username}`,
// 			{
// 				code: body.code,
// 			},
// 		);

// 		return response.data;
// 	} catch (error) {
// 		if (error instanceof AxiosError) {
// 			return {
// 				data: null,
// 				meta: error.response?.data?.meta,
// 			};
// 		} else {
// 			return {
// 				success: false,
// 				data: null,
// 				status: null,
// 				message: "An unknown error occurred. Please try again later.",
// 			};
// 		}
// 	}
// };

// export const updatePassword = async (
// 	body: UpdatePasswordFormData,
// 	headers: AxiosRequestConfig["headers"],
// ) => {
// 	try {
// 		const response = await httpRequest.put(
// 			`${baseUrl}/member/profile/${BRAND_CODE}/password`,
// 			body,
// 			{
// 				headers,
// 			},
// 		);

// 		return response;
// 	} catch (error) {
// 		if (error instanceof AxiosError) {
// 			return error.response;
// 		} else {
// 			return {
// 				success: false,
// 				data: null,
// 				status: null,
// 				message: "An unknown error occurred. Please try again later.",
// 			};
// 		}
// 	}
// };
// export const forgotPassword = async (body: ForgotPasswordFormData) => {
// 	try {
// 		const response = await httpRequest.post(
// 			`${baseUrl}/auth/forgot/${BRAND_CODE}`,
// 			body,
// 		);

// 		return response.data as {
// 			data: {
// 				email: string;
// 			};
// 			meta: {
// 				message: string;
// 				status: number;
// 			};
// 		};
// 	} catch (error) {
// 		if (error instanceof AxiosError) {
// 			return error.response?.data as {
// 				data: null;
// 				meta: {
// 					message: string;
// 					status: number;
// 				};
// 			};
// 		} else {
// 			return {
// 				data: null,
// 				meta: {
// 					status: null,
// 					message:
// 						"An unknown error occurred. Please try again later.",
// 				},
// 			};
// 		}
// 	}
// };

// export const requestOtp = async (username: string) => {
// 	try {
// 		const response = await axios.get(
// 			`${baseUrl}/auth/otp/AKUASN/${username}`,
// 		);

// 		return response;
// 	} catch (error) {
// 		if (error instanceof AxiosError) {
// 			return error.response;
// 		} else {
// 			return {
// 				success: false,
// 				status: null,
// 				message: "An unknown error occurred. Please try again later.",
// 			};
// 		}
// 	}
// };

// export const requestOtpForgetPass = async (username: string) => {
// 	try {
// 		const response = await axios.get(
// 			`${baseUrl}/auth/forgot/AKUASN/${username}`,
// 		);

// 		return response;
// 	} catch (error) {
// 		if (error instanceof AxiosError) {
// 			return error.response;
// 		} else {
// 			return {
// 				success: false,
// 				status: null,
// 				message: "An unknown error occurred. Please try again later.",
// 			};
// 		}
// 	}
// };

// export const createNewPassword = async (
// 	data: CreateNewPasswordFormData,
// 	headers: AxiosRequestConfig["headers"],
// ) => {
// 	try {
// 		const response = await httpRequestPass.put(
// 			`${baseUrl}/auth/forgot/create/password/AKUASN`,
// 			data,
// 			{
// 				headers,
// 			},
// 		);

// 		return response.data;
// 	} catch (error) {
// 		if (error instanceof AxiosError) {
// 			return error.response?.data;
// 		} else {
// 			return {
// 				success: false,
// 				status: null,
// 				message: "An unknown error occurred. Please try again later.",
// 			};
// 		}
// 	}
// };

// export const submitOtp = async (username: string, kodeOtp: string) => {
// 	try {
// 		const response = await axios.post(
// 			`${baseUrl}/auth/forgot/AKUASN/${username}`,
// 			{
// 				code: kodeOtp,
// 			},
// 		);

// 		return response.data;
// 	} catch (error) {
// 		if (error instanceof AxiosError) {
// 			return error.response?.data;
// 		} else {
// 			return {
// 				success: false,
// 				status: null,
// 				message: "An unknown error occurred. Please try again later.",
// 			};
// 		}
// 	}
// };
