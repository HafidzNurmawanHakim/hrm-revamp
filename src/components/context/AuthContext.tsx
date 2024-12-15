"use client";
import React, { createContext, useContext, useMemo } from "react";

interface TryoutContextProps {}

const AuthContext = createContext<TryoutContextProps | null>(null);

export const useAuthContext = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error("useAuthContext must be used within a AuthProvider");
	}

	return context;
};

interface ProviderProps {
	children: React.ReactNode;
}

const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
	const value = useMemo(() => ({}), []);

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
