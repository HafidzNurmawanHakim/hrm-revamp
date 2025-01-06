import { z } from "zod";

/**
 * Login Schema
 */
export const loginSchema = z.object({
	username: z
		.string({
			required_error: "Email / No WhatsApp harus diisi!",
		})
		.min(1, "Email / No WhatsApp harus diisi!"),
	password: z
		.string({
			required_error: "Password harus diisi!",
		})
		.min(6, "Password setidaknya 6 karakter"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

/**
 * Register Schema
 */
export const registerSchema = z
	.object({
		name: z
			.string({
				required_error: "Nama Lengkap harus diisi!",
			})
			.min(1, "Nama Lengkap harus diisi!")
			.max(100, "Nama Lengkap can't be longer than 100 characters"),
		phone: z
			.string({
				required_error: "No Handphone harus terdiri dari 9-15 digit",
			})
			.min(9, {
				message: "No Handphone harus terdiri dari 9-15 digit",
			})
			.max(15, {
				message: "No Handphone harus terdiri dari 9-15 digit",
			}),
		email: z
			.string({
				required_error: "Email harus diisi!",
			})
			.email("Email tidak valid!")
			.min(1, "Email harus diisi!"),
		terms_check: z
			.boolean({
				required_error:
					"Pastikan untuk menyetujui Syarat dan Ketentuan serta Kebijakan Privasi",
			})
			.refine((value) => value === true, {
				message:
					"Pastikan untuk menyetujui Syarat dan Ketentuan serta Kebijakan Privasi",
			}),
		asn_type: z
			.string({ invalid_type_error: "Jenis ASN harus diisi!" })
			.min(1, "Jenis ASN harus diisi!"),
		program_study_exam_id: z
			.string({
				required_error: "Formasi harus diisi!",
			})
			.min(1, "Formasi harus diisi!"),
		password: z
			.string({
				required_error: "Password harus diisi!",
			})
			.min(6, "Password setidaknya 6 karakter"),
		password_confirmation: z
			.string({
				required_error: "Konfirmasi Password harus diisi!",
			})
			.min(6, "Konfirmasi Password harus sama!"),
	})
	.refine((data) => data.password === data.password_confirmation, {
		message: "Password harus sama!",
		path: ["password_confirmation"],
	})
	.refine((data) => !!data.asn_type, {
		message: "Formasi harus diisi setelah Jenis ASN diisi!",
		path: ["program_study_exam_id"], // Menandai kesalahan pada field ini
	});

export type RegisterFormData = z.infer<typeof registerSchema>;

/**
 * OTP Schema
 */
export const otpSchema = z.object({
	kodeOtp: z.string().min(1, "Kode OTP harus diisi!"),
});
export type OTPFormData = z.infer<typeof otpSchema>;

/**
 * Forgot Password Schema
 */
export const forgotPasswordSchema = z.object({
	username: z.string().min(1, "No Handphone / Email harus diisi!"),
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

/**
 * Update Password Schema
 */
export const updatePasswordSchema = z
	.object({
		old_password: z.string().min(6, "Password setidaknya 6 karakter"),
		password: z.string().min(6, "Password setidaknya 6 karakter"),
		password_confirmation: z
			.string()
			.min(6, "Konfirmasi Password harus sama!"),
	})
	.refine((data) => data.password === data.password_confirmation, {
		message: "Password harus sama!",
		path: ["password_confirmation"],
	});

export type UpdatePasswordFormData = z.infer<typeof updatePasswordSchema>;

/**
 * Create New Password From Forgot Password Schema
 */
export const createNewPasswordSchema = z
	.object({
		password: z.string().min(6, "Password setidaknya 6 karakter"),
		password_confirmation: z
			.string()
			.min(6, "Konfirmasi Password harus sama!"),
	})
	.refine((data) => data.password === data.password_confirmation, {
		message: "Password harus sama!",
		path: ["password_confirmation"],
	});

export type CreateNewPasswordFormData = z.infer<typeof createNewPasswordSchema>;
