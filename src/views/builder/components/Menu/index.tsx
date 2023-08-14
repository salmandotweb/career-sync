import PrintResume from "@/components/PrintResume";
import { Menubar } from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { TemplateSlider } from "@/templates/Prisma/components/SelectTemplate";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export function Menu() {
	return (
		<Menubar className="print:hidden rounded-none border-b border-none p-6 flex items-center justify-between w-full">
			<div className="flex items-center gap-4">
				<Avatar>
					<AvatarImage src="https://media.licdn.com/dms/image/D4D0BAQGu_xdkbbVAZQ/company-logo_200_200/0/1692017114895?e=1700092800&v=beta&t=e-hm7eiN9p-iOmYFuIu_87XL2uhGXBJpijT8rKPoDdo" />
					<AvatarFallback>SC</AvatarFallback>
				</Avatar>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="font-medium text-[15px]">
								Templates
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<TemplateSlider />
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
			<PrintResume />
		</Menubar>
	);
}
