import PrintResume from "@/components/PrintResume";
import { Menubar } from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TemplateSlider } from "@/components/SelectTemplate";
import Link from "next/link";

export function Menu() {
  return (
    <Menubar className="print:hidden rounded-none border-b border-none p-6 flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Avatar>
            <AvatarImage src="https://media.licdn.com/dms/image/D4D0BAQGu_xdkbbVAZQ/company-logo_200_200/0/1692017114895?e=1700092800&v=beta&t=e-hm7eiN9p-iOmYFuIu_87XL2uhGXBJpijT8rKPoDdo" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Link>
        <Popover>
          <PopoverTrigger className="text-[16px] font-medium flex items-center gap-2">
            Templates
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </PopoverTrigger>
          <PopoverContent className="w-[550px] mt-2">
            <TemplateSlider />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex items-center gap-4">
        <PrintResume />
      </div>
    </Menubar>
  );
}
