import styles from "./Button.module.scss";

interface ButtonProps {
	variant?: 'primary' | 'secondary';
	children: React.ReactNode;
	onClick?: () => void;
}

export default function Button({
	variant = 'primary',
	children,
	onClick
}: ButtonProps) {
	return (
		<button
			className={`${styles.btn} ${styles[variant]}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
