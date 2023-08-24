import { Button } from "@/components/ui/button";
import Image from "next/image";

interface NavLink {
	name: string;
	href: string;
}

const NavLinks: NavLink[] = [
	{
		name: "About",
		href: "/builder",
	},
	{
		name: "Pricing",
		href: "/builder",
	},
	{
		name: "Templates",
		href: "/builder",
	},
	{
		name: "FAQ",
		href: "/builder",
	},
];

const Navbar = () => {
	return (
		<header className="bg-white">
			<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-20 items-center justify-between">
					<div className="flex-1 md:flex md:items-center md:gap-12">
						<Image
							src="/logo/careersync.png"
							width={70}
							height={70}
							alt="Career Sync Logo"
						/>
					</div>

					<div className="md:flex md:items-center md:gap-12">
						<nav aria-label="Global" className="hidden md:block">
							<ul className="flex items-center gap-6 text-sm">
								{NavLinks.map((link) => (
									<li>
										<a
											className="text-gray-500 transition hover:text-gray-500/75"
											href={link.href}>
											{link.name}
										</a>
									</li>
								))}
							</ul>
						</nav>

						<div className="flex items-center gap-4">
							<div className="sm:flex sm:gap-4">
								<Button variant="default">Get Started</Button>
							</div>

							<div className="block md:hidden">
								<button className="rounde p-2 text-gray-600 transition hover:text-gray-600/75">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
