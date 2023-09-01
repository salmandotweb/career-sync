import { Separator } from "@/components/ui/separator";
import { FC } from "react";
import { MdOutlineMailOutline } from "react-icons/md";

interface indexProps {}

const Spectrum: FC<indexProps> = ({}) => {
	return (
		<div
			className="bg-[#232339] h-[100%] w-[100%] text-white overflow-hidden"
			id="resume">
			<div className="flex flex-row h-[100%] w-[100%]">
				<div className="w-[30%] h-[100%] bg-[#1e1e2f] flex flex-col items-start gap-6 py-6 px-4">
					<div className="flex flex-col items-start gap-1">
						<h1 className="text-[16px] text-white font-semibold">
							Muhammad Salman
						</h1>
						<h3 className="text-[12px] text-[#D9DFE8]">Software Engineer</h3>
						<p className="text-[8px] font-light text-[#D9DFE8] mt-2">
							Adept at collaborating with online clients to gather requirements,
							devise plans, and enhance designs for usability and functionality.
							Proficient in JavaScript, TypeScript, React.js, and Next.js.
						</p>
					</div>
					<Separator className="h-[.080px] bg-[#D9DFE8] opacity-[10%]" />
					<div className="flex flex-col gap-5">
						<Info />
						<Info />
						<Info />
						<Info />
					</div>
					<Separator className="h-[.080px] bg-[#D9DFE8] opacity-[10%]" />
					<div className="flex flex-col gap-5">
						<Info />
						<Info />
						<Info />
						<Info />
					</div>
					<Separator className="h-[.080px] bg-[#D9DFE8] opacity-[10%]" />
					<div className="flex flex-col gap-5">
						<Info />
						<Info />
					</div>
				</div>
				<div className="w-[70%] h-[100%] bg-[#232339]"></div>
			</div>
		</div>
	);
};

export default Spectrum;

const Info = () => {
	return (
		<div className="flex items-center gap-2">
			<div className="h-[8px] w-[8px] rounded-2xl flex items-center justify-center bg-[#2E2E48] p-3">
				<div>
					<MdOutlineMailOutline className="text-[#D9DFE8]" />
				</div>
			</div>
			<div className="flex flex-col gap-[.5]">
				<h3 className="text-[9px] text-[#ACB1C3]">Email</h3>
				<p className="text-[9px] font-light text-[#D9DFE8]">
					salmandotweb@gmail.com
				</p>
			</div>
		</div>
	);
};
