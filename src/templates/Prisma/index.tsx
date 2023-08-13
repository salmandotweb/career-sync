import Gradient from "@/templates/Prisma/components/Gradient";
import { FC } from "react";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { Separator } from "@/components/ui/separator";
import { useAppSelector } from "@/stores/hooks";
import { selectBasicInfo } from "@/stores/slices/basic/basicInfoSlice";
import { BsCalendar2Minus } from "react-icons/bs";
import { Badge } from "@/components/ui/badge";
import { BsLink45Deg } from "react-icons/bs";
import { BsStars } from "react-icons/bs";

interface indexProps {}

const Prisma: FC<indexProps> = ({}) => {
	const basicInfo = useAppSelector(selectBasicInfo);

	return (
		<div
			className="bg-[#0F172A] w-[230mm] min-h-[296mm] text-white overflow-hidden mb-[50px] pb-10"
			id="resume">
			<div className="flex items-center justify-center flex-col h-[200px] w-full relative z-[100]">
				<Gradient />
				<h1 className="text-[36px] text-white font-bold">{basicInfo.name}</h1>
				<p className="text-[14px] text-[#CBD5E1]">{basicInfo.label}</p>
				<div className="flex items-center gap-5 mt-3 mb-5">
					<div className="flex items-center gap-2">
						<FiMapPin />
						<p className="text-[12px] text-[#E2E8F0]">
							{basicInfo.location.city}
						</p>
					</div>
					<div className="flex items-center gap-2">
						<HiOutlineMail />
						<p className="text-[12px] text-[#E2E8F0]">salmandotweb@gmail.com</p>
					</div>
				</div>
				<div className="flex items-center justify-center gap-4 text-[14px]">
					<div className="bg-[#F6F3FF] flex items-center justify-center rounded-[20px] px-2 gap-1 text-[#7C3AED]">
						<HiOutlineGlobeAlt />
						salmandotweb.me
					</div>
					<div className="bg-[#F1F8FF] flex items-center justify-center rounded-[20px] px-2 gap-1 text-[#0A66C2]">
						<BsLinkedin />
						salmandotweb
					</div>
					<div className="bg-[#F2F2F2] flex items-center justify-center rounded-[20px] px-2 gap-1 text-[#222]">
						<AiFillGithub />
						salmandotweb
					</div>
				</div>
			</div>
			<Separator className="bg-[#334155]" />
			<div className="flex flex-col items-start justify-start w-[800px] mx-auto py-[20px] gap-4">
				<div className="grid grid-cols-[1fr,3fr,1fr] gap-3 items-start">
					<h1 className="text-[#E2E8F0] text-[16px] font-medium">Education</h1>
					<h1 className="text-[#E2E8F0] text-[16px] font-medium">
						Software Engineering <span className="text-[#CBD5E1]"> - </span>
						<span className="text-[#E2E8F0] font-light">
							Virtual University Pakistan
						</span>
					</h1>
					<div className="flex items-center gap-2 text-[12px]">
						<BsCalendar2Minus />
						<h3 className="text-[#E2E8F0] text-[14px] font-medium">
							Nov 2022 - present
						</h3>
					</div>
				</div>
				<Separator className="bg-[#334155]" />
				<div className="grid grid-cols-[1fr,4.5fr] gap-3 items-start w-full">
					<h1 className="text-[#E2E8F0] text-[16px] font-medium">Experience</h1>
					<div className="flex flex-col gap-6">
						<Experience />
						<Separator className="bg-[#334155]" />
						<Experience />
						<Separator className="bg-[#334155]" />
						<Experience />
					</div>
				</div>
				<Separator className="bg-[#334155]" />
				<div className="grid grid-cols-[1fr,4.5fr] gap-3 items-start w-full">
					<h1 className="text-[#E2E8F0] text-[16px] font-medium">
						Featured Project
					</h1>
					<div className="flex flex-col gap-2">
						<div className="grid grid-cols-[2fr,1fr] gap-3 items-start">
							<h1 className="text-[#E2E8F0] text-[16px] font-medium">
								Nexcare.io
							</h1>
						</div>
						<div className="flex items-center justify-start gap-3">
							<CustomBadge label="Next.Js" />
							<CustomBadge label="Typescript" />
							<CustomBadge label="Material UI" />
							<CustomBadge label="PHP" />
							<CustomBadge label="Laravel" />
							<CustomBadge label="MySql" />
						</div>
						<div className="flex flex-col gap-3 justify-start items-start mt-2">
							<Summary
								summary="NexCare is an integrated solution for single and multi-specialty practices that optimizes care delivery and empowers doctors to focus on the patient. More details at"
								link="https://nexcare.io/"
							/>

							<div className="flex items-center gap-2 mt-2">
								<BsStars />{" "}
								<p className="text-[#CBD5E1] text-[14px] font-light">
									See all of my projects on my portfolio:{" "}
								</p>
								<span className="underline inline-flex items-center gap-1 text-[#CBD5E1] text-[14px] font-light">
									<BsLink45Deg /> https://salmandotweb.me/projects
								</span>
							</div>
						</div>
					</div>
				</div>
				<Separator className="bg-[#334155]" />
				<div className="grid grid-cols-[1fr,4.5fr] gap-3 items-start w-full">
					<h1 className="text-[#E2E8F0] text-[16px] font-medium">
						Skills and Tools
					</h1>
					<div className="flex flex-col gap-3">
						<Skills />
						<Separator className="bg-[#334155]" />
						<Skills />
						<Separator className="bg-[#334155]" />
						<Skills />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Prisma;

const Experience = () => {
	return (
		<div className="flex flex-col gap-2">
			<div className="grid grid-cols-[2fr,1fr] gap-3 items-start">
				<h1 className="text-[#E2E8F0] text-[16px] font-medium">
					Rising Technologies <span className="text-[#CBD5E1]"> - </span>
					<span className="text-[#E2E8F0] font-light">
						Frontend Software Engineer
					</span>
				</h1>
				<div className="flex items-center gap-2 text-[12px]">
					<BsCalendar2Minus />
					<h3 className="text-[#E2E8F0] text-[14px] font-medium">
						Sep 2022 - present
					</h3>
				</div>
			</div>
			<div className="flex items-center justify-start gap-3">
				<CustomBadge label="Next.Js" />
				<CustomBadge label="Typescript" />
				<CustomBadge label="Material UI" />
			</div>
			<div className="flex flex-col gap-3 justify-start items-start mt-2">
				<Summary summary="Spearheaded the development and design of exceptional layouts and interfaces, resulting in seamless user experiences." />
				<Summary summary="Collaborated with cross-functional teams on the creation of innovative and user-friendly solutions." />
			</div>
		</div>
	);
};

const Skills = () => {
	return (
		<div className="flex items-start gap-3 flex-col">
			<h1 className="text-[#E2E8F0] text-[16px] font-medium">Languages</h1>
			<div className="flex items-center gap-5">
				<p className="text-[#64748B] text-[14px]">Frontend related</p>
				<div className="flex items-center gap-2">
					<CustomBadge label="Javascript" />
					<CustomBadge label="React.Js" />
					<CustomBadge label="Next.Js" />
					<CustomBadge label="Typescript" />
				</div>
			</div>
			<div className="flex items-center gap-5">
				<p className="text-[#64748B] text-[14px]">Backend related</p>
				<div className="flex items-center gap-2">
					<CustomBadge label="Node.Js" />
					<CustomBadge label="TRPC" />
					<CustomBadge label="Postgresql" />
				</div>
			</div>
		</div>
	);
};

const CustomBadge = ({ label }: { label: string }) => {
	return (
		<Badge
			variant="secondary"
			className="text-[#CBD5E1] bg-[#334155] font-medium hover:bg-[#334155]">
			{label}
		</Badge>
	);
};

const Summary = ({ summary, link }: { summary: string; link?: string }) => {
	return (
		<div className="flex items-start gap-2 justify-start">
			<div className="h-[10px] w-[12px] bg-[#CBD5E1] rounded-[3px] mt-[4px]" />
			<p className="text-[#CBD5E1] text-[14px] font-light">
				{summary}{" "}
				{link && (
					<span className="underline inline-flex items-center gap-1">
						<BsLink45Deg /> {link}
					</span>
				)}
			</p>
		</div>
	);
};
