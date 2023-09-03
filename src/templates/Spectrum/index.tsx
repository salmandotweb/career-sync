import { Separator } from "@/components/ui/separator";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useAppSelector } from "@/stores/hooks";
import { selectBasicInfo } from "@/stores/slices/basic/basicInfoSlice";
import { AiOutlineLink } from "react-icons/ai";
import { BiPhone, BiSolidMap } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const Spectrum = () => {
	const basicInfo = useAppSelector(selectBasicInfo);

	const filteredProfiles = basicInfo.profiles.filter(
		(profile) => profile.network !== "Website"
	);
	return (
		<div
			className="bg-[#232339] h-[100%] w-[100%] text-white overflow-hidden"
			id="resume">
			<div className="flex flex-row h-[100%] w-[100%]">
				<div className="w-[30%] h-[100%] bg-[#1e1e2f] flex flex-col items-start gap-6 py-6 px-4">
					<div className="flex flex-col items-start gap-1">
						<h1 className="text-[16px] text-white font-semibold">
							{basicInfo.name}
						</h1>
						<h3 className="text-[12px] text-[#D9DFE8]">{basicInfo.label}</h3>
						<p className="text-[9.5px] font-light text-[#D9DFE8] mt-2">
							{basicInfo.intro}
						</p>
					</div>
					<Separator className="h-[.080px] bg-[#D9DFE8] opacity-[10%]" />
					<div className="flex flex-col gap-5">
						<Info
							icon={<MdOutlineMailOutline className="text-[#D9DFE8]" />}
							label="Email"
							value={basicInfo.email}
						/>
						<Info
							icon={<AiOutlineLink className="text-[#D9DFE8]" />}
							label="Website"
							value={basicInfo.url}
						/>
						<Info
							icon={<BiPhone className="text-[#D9DFE8]" />}
							label="Phone"
							value={basicInfo.phone}
						/>
						<Info
							icon={<BiSolidMap className="text-[#D9DFE8]" />}
							label="Address"
							value={basicInfo.location.city}
						/>
					</div>
					<Separator className="h-[.080px] bg-[#D9DFE8] opacity-[10%]" />
					<div className="flex flex-col gap-5">
						{filteredProfiles.map((profile) => {
							return (
								<Info
									key={profile.network}
									image={`/images/icons/${profile.network}.svg`}
									label={profile.network}
									value={profile.url}
									username={profile.username}
									link={true}
								/>
							);
						})}
					</div>
					<Separator className="h-[.080px] bg-[#D9DFE8] opacity-[10%]" />
					<div className="flex flex-col gap-5">
						{/* <Info />
						<Info /> */}
					</div>
				</div>
				<div className="w-[70%] h-[100%] bg-[#232339] py-6 px-4 flex flex-col items-start gap-6">
					<div className="flex flex-col items-start gap-4">
						<h1 className="font-semi-bold">Experience</h1>
						<div className="flex flex-col items-start gap-4">
							<SingleExperience />
							<SingleExperience />
							<SingleExperience />
						</div>
					</div>
					<div className="flex flex-col items-start gap-4 w-full">
						<h1 className="font-semi-bold">Education</h1>
						<div className="flex items-start gap-2 justify-between w-full">
							<Education />
							<Education />
							<Education />
						</div>
					</div>
					<div className="flex flex-col items-start gap-4 w-full">
						<h1 className="font-semi-bold">Skills</h1>
						<div className="flex items-start gap-4 w-full justify-between">
							<div className="flex-1 flex flex-col gap-2">
								<div className="flex items-center gap-2">
									<img
										src="/images/icons/frontend.svg"
										alt="frontend"
										height={20}
										width={20}
									/>
									<h3 className="text-[10px] font-light whitespace-nowrap">
										Frontend
									</h3>
								</div>
								<div className="grid grid-cols-2 gap-2">
									<Skill />
									<Skill />
								</div>
								<div className="grid grid-cols-1 gap-2">
									<Skill />
								</div>
								<div className="grid grid-cols-2 gap-2">
									<Skill />
									<Skill />
								</div>
							</div>
							<div className="flex-1 flex flex-col gap-2">
								<div className="flex items-center gap-2">
									<img
										src="/images/icons/backend.svg"
										alt="frontend"
										height={20}
										width={20}
									/>
									<h3 className="text-[10px] font-light whitespace-nowrap">
										Backend
									</h3>
								</div>
								<div className="grid grid-cols-2 gap-2">
									<Skill />
									<Skill />
								</div>
								<div className="grid grid-cols-1 gap-2">
									<Skill />
								</div>
								<div className="grid grid-cols-2 gap-2">
									<Skill />
									<Skill />
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-start gap-4 w-full">
						<h1 className="font-semi-bold">Tools</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Spectrum;

const Education = () => {
	return (
		<div className="py-3 px-4 flex flex-col items-start gap-4 bg-[#2E2E48] rounded-md w-full">
			<div className="flex items-center gap-2">
				<img
					src="https://media.licdn.com/dms/image/C4E0BAQE5OLM7B98-MA/company-logo_200_200/0/1611817381050?e=1701907200&v=beta&t=cfABWsT5kfN2feQ397-3OoxzpZKNCSFj1PA_j8xQJs4"
					height={30}
					width={30}
					alt=""
				/>
				<h3 className="text-[10px] font-light">Virtual University PK</h3>
			</div>
			<div className="flex flex-col items-start gap-1">
				<h3 className="text-[10px] font-light">High School</h3>
				<h3 className="text-[9px] text-[#ACB1C3]">2016 - 2018</h3>
			</div>
		</div>
	);
};

const Skill = () => {
	return (
		<div className="p-6 flex items-center justify-center bg-[#2E2E48] rounded-md flex-wrap w-full">
			<h3 className="text-[10px] font-light text-[#95AAFB]">React JS</h3>
		</div>
	);
};

const SingleExperience = () => {
	return (
		<div className="flex items-start gap-2">
			<div className="flex flex-col items-center gap-1 mt-[5px]">
				<div className="h-[5px] w-[5px] rounded-3xl bg-[#ACB1C3]" />
				<div className="h-[50px] w-[2px] bg-[#2E2E48]" />
			</div>
			<div className="flex flex-col items-start gap-2">
				<div className="flex items-center gap-[5px]">
					<h3 className="text-[8px] font-light">Sep 2022</h3>
					<h3 className="text-[8px] font-light">Present</h3>
					<FaLocationDot className="w-[5px] font-light" />
					<h3 className="text-[8px] font-light">Lahore, Pakistan</h3>
				</div>
				<div className="flex items-start gap-2">
					<img
						src="https://media.licdn.com/dms/image/C4E0BAQE5OLM7B98-MA/company-logo_200_200/0/1611817381050?e=1701907200&v=beta&t=cfABWsT5kfN2feQ397-3OoxzpZKNCSFj1PA_j8xQJs4"
						height={30}
						width={30}
						alt=""
					/>
					<div className="flex flex-col items-start gap-1">
						<h3 className="text-[9px] font-light">Software Engineer</h3>
						<h1 className="font-semi-bold text-[10px]">Rising Technologies</h1>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-start gap-2 w-[65%] ml-auto">
				<p className="text-[9px] font-light">
					- Working as a Software Engineer at Rising Technologies. I am
					developing web applications using React.js, Next.js, TypeScript,
					JavaScript, and other technologies.
				</p>
				<p className="text-[9px] font-light">
					- Led the design and implementation of company websites and
					API-integrated projects, ensuring cutting-edge user experiences.
				</p>
			</div>
		</div>
	);
};

const Info = ({
	icon,
	image,
	label,
	value,
	username,
	link,
}: {
	icon?: React.ReactNode;
	image?: string;
	label: string;
	value: string;
	username?: string;
	link?: boolean;
}) => {
	return (
		<div className="flex items-center gap-2">
			<div className="h-[8px] w-[8px] rounded-2xl flex items-center justify-center bg-[#2E2E48] p-3 relative">
				<div>{icon}</div>
				{image && <Image src={image} alt="icon" fill />}
			</div>

			<div className="flex flex-col gap-[.5]">
				<h3 className="text-[9px] text-[#ACB1C3]">{label}</h3>
				{!link ? (
					<p className="text-[9px] font-light text-[#D9DFE8]">{value}</p>
				) : (
					<Link
						href={value}
						className="text-[9px] font-light text-[#D9DFE8]"
						target="_blank">
						@{username}
					</Link>
				)}
			</div>
		</div>
	);
};
