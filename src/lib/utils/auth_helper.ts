import { JWTPayload, jwtVerify, KeyLike, SignJWT } from "jose";

type EncryptOptions = {
	expiresIn?: string; // Contoh: '10s', '1h', '2d'
	key?: KeyLike | Uint8Array; // Secret atau Private Key
};

export async function encrypt(
	payload: JWTPayload,
	{ expiresIn = "1h" }: EncryptOptions = {}
): Promise<string> {
	const secretKey = new TextEncoder().encode(
		process.env.AUTH_SECRET || "defaultSecret"
	);

	return await new SignJWT(payload)
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime(expiresIn)
		.sign(secretKey);
}

export async function decrypt(token?: string): Promise<any> {
	try {
		if (!token) return null;
		const secretKey = new TextEncoder().encode(
			process.env.AUTH_SECRET || "defaultSecret"
		);
		const { payload } = await jwtVerify(token, secretKey, {
			algorithms: ["HS256"],
		});

		return payload;
	} catch {
		return null;
	}
}
