"use client";
import React, {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useMemo,
	useState,
} from "react";

interface AppContextProps {
	sidebarOpen: boolean;
	setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextProps | null>(null);

export const useAppContext = () => {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error("useAppContext must be used within a AppProvider");
	}

	return context;
};

interface ProviderProps {
	children: React.ReactNode;
}

const AppProvider: React.FC<ProviderProps> = ({ children }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const value = useMemo(
		() => ({ sidebarOpen, setSidebarOpen }),
		[sidebarOpen]
	);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
