import React from "react";

// Props untuk component VisuallyHidden
interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {
	as?: React.ElementType; // Element HTML yang ingin digunakan (default: 'span')
}

/**
 * VisuallyHidden Component
 * Menyembunyikan elemen secara visual tetapi tetap terlihat oleh screen reader.
 */
const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({
	as: Component = "span",
	style,
	...props
}) => {
	return (
		<Component
			style={{
				...style,
				position: "absolute",
				width: "1px",
				height: "1px",
				padding: 0,
				margin: "-1px",
				overflow: "hidden",
				clip: "rect(0, 0, 0, 0)",
				whiteSpace: "nowrap",
				border: 0,
			}}
			{...props}
		/>
	);
};

export default VisuallyHidden;
