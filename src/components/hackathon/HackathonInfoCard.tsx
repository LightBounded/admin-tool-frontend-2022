interface InfoCardProps {
	label: string;
	count: number;
	onClick: () => void;
}

export default function HackathonInfoCard({
	label,
	count,
	onClick,
}: InfoCardProps) {
	return (
		<button
			onClick={onClick}
			className="w-[218px] h-[96px] mx-4 rounded-lg border border-solid border-hinfobar-border text-left bg-white flex flex-col items-center pl-6 justify-center"
		>
			<p className="text-hinfobar-maintext font-Inter font-extrabold text-4xl leading-[41.15px] w-full">
				{count}
			</p>
			<p className="text-hinfobar-subtext font-Inter font-semibold text-2xl leading-[29.05px] w-full">
				{label}
			</p>
		</button>
	);
}