import Gradient from "@/templates/Prisma/components/Gradient";
import { FC } from "react";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { useAppSelector } from "@/stores/hooks";
import { selectBasicInfo } from "@/stores/slices/basic/basicInfoSlice";

interface indexProps {}

const Spectrum: FC<indexProps> = ({}) => {
	const basicInfo = useAppSelector(selectBasicInfo);

	return (
		<div
			className="bg-[#0F172A] h-[100%] w-[100%] text-white overflow-hidden"
			id="resume">
			<div className="flex items-center justify-center flex-col h-[140px] w-full relative z-[100]">
				<Gradient />
				<h1 className="text-[28px] text-white font-bold">{basicInfo.name}</h1>
				<p className="text-[12px] text-[#CBD5E1]">{basicInfo.label}</p>
				<div className="flex items-center gap-3 mt-2 mb-3">
					<div className="flex items-center gap-1 text-[11px]">
						<FiMapPin />
						<p className="text-[#E2E8F0]">{basicInfo.location.city}</p>
					</div>
					<div className="flex items-center gap-1 text-[11px]">
						<HiOutlineMail />
						<p className="text-[#E2E8F0]">salmandotweb@gmail.com</p>
					</div>
				</div>
				<div className="flex items-center justify-center gap-4 text-[11px]">
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
		</div>
	);
};

export default Spectrum;
