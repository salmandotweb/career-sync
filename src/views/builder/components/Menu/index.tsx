import PrintResume from "@/components/PrintResume";
import { Menubar } from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Menu() {
	return (
		<Menubar className="print:hidden rounded-none border-b border-none p-6 flex items-center justify-between w-full">
			<Avatar>
				<AvatarImage src="https://media.licdn.com/dms/image/D4D0BAQGu_xdkbbVAZQ/company-logo_200_200/0/1692017114895?e=1700092800&v=beta&t=e-hm7eiN9p-iOmYFuIu_87XL2uhGXBJpijT8rKPoDdo" />
				<AvatarFallback>SC</AvatarFallback>
			</Avatar>
			<PrintResume />
		</Menubar>
	);
}
