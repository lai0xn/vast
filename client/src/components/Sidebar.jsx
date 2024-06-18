export default function Sidebar() {
	return (
		<div
			className="bg-burpl w-1/5 min-w-56 bg-cover"
			style={{
				backgroundImage: 'url(/sidebarBG.png)',
				backgroundSize: '120%',
			}}
		>
			<a className="h-56 px-10 py-14 w-full border-b border-clay block" href="/platforms">
				<img src="/logo.svg" className="w-40" />
			</a>
			<div className="px-10 py-14">
				<ul className="space-y-8">
					<li className="flex gap-2 w-fit">
						<img src="/icons/clients-session.svg" className="opacity-60" />
						<a
							href="/platforms"
							className="text-clay-light text-lg font-medium"
						>
							Clients
						</a>
					</li>
					<li className="flex gap-2 w-fit border-b-2">
						<img src="/icons/platforms-session.svg" className="opacity-100" />
						<a href="/platforms" className="text-white text-lg font-medium">
							Platforms
						</a>
					</li>
					<li className="flex gap-2 w-fit">
						<img src="/icons/OS-session.svg" className="opacity-60" />
						<a
							href="/platforms"
							className="text-clay-light text-lg font-medium"
						>
							OS
						</a>
					</li>
					<li className="flex gap-2 w-fit">
						<img src="/icons/Vcenter-session.svg" className="opacity-60" />
						<a
							href="/platforms"
							className="text-clay-light text-lg font-medium"
						>
							V Center
						</a>
					</li>
					<li className="flex gap-2 w-fit">
						<img src="/icons/users.svg" className="opacity-60" />
						<a
							href="/platforms"
							className="text-clay-light text-lg font-medium"
						>
							Users
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
