import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { ISkillsItem } from "@/stores/slices/experiences/interfaces";

const skills = [
	{ id: 1, name: "JavaScript" },
	{ id: 2, name: "TypeScript" },
	{ id: 3, name: "React" },
	{ id: 4, name: "Next.js" },
	{ id: 5, name: "Node.js" },
	{ id: 6, name: "Express" },
	{ id: 7, name: "GraphQL" },
	{ id: 8, name: "Apollo" },
	{ id: 9, name: "Prisma" },
	{ id: 10, name: "PostgreSQL" },
	{ id: 11, name: "MongoDB" },
	{ id: 12, name: "Redis" },
	{ id: 13, name: "Tailwind CSS" },
	{ id: 14, name: "Chakra UI" },
	{ id: 15, name: "Material UI" },
	{ id: 16, name: "Jest" },
	{ id: 17, name: "React Testing Library" },
	{ id: 18, name: "Cypress" },
	{ id: 19, name: "React Hook Form" },
];

export default function MultiSelect({
	selected,
	setSelected,
}: {
	selected: ISkillsItem[] | null;
	setSelected: React.Dispatch<
		React.SetStateAction<ISkillsItem[] | null | undefined>
	>;
}) {
	const [selectSkills, setSelectSkills] = useState<
		{
			id: number;
			name: string;
		}[]
	>([]);
	const [query, setQuery] = useState("");

	const filteredSkills =
		query === ""
			? skills.filter((skill) => !selectSkills.includes(skill))
			: skills
					.filter((skill) =>
						skill.name
							.toLowerCase()
							.replace(/\s+/g, "")
							.includes(query.toLowerCase().replace(/\s+/g, ""))
					)
					.filter((skill) => !selectSkills.includes(skill));

	return (
		<div className="w-full">
			<Combobox
				value={selected}
				onChange={setSelected}
				disabled={selectSkills?.length === 3}>
				<div className="relative mt-1">
					<div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
						<Combobox.Input
							className="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
							placeholder="Select Top 3 Skills used in this company"
							displayValue={(skill: { id: number; name: string }) =>
								skill?.name
							}
							onChange={(e) => {
								setQuery(e.target.value);
							}}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									if (filteredSkills.length > 0) {
										if (!selectSkills.includes(filteredSkills[0])) {
											setSelectSkills([...selectSkills, filteredSkills[0]]);
										}
									}
								}
							}}
						/>
						<Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
							<ChevronUpDownIcon
								className="h-5 w-5 text-gray-400"
								aria-hidden="true"
							/>
						</Combobox.Button>
					</div>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery("")}>
						<Combobox.Options className="relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
							{filteredSkills.length === 0 && query !== "" ? (
								<div className="px-2 py-1.5 text-sm font-medium">
									Nothing found.
								</div>
							) : (
								filteredSkills.map((skill) => (
									<Combobox.Option
										key={skill.id}
										className={({ active }) =>
											`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${
												active ? "bg-gray-300 text-black" : "text-gray-600"
											}`
										}
										value={""}
										onClick={() => {
											if (!selectSkills.includes(skill)) {
												setSelectSkills([...selectSkills, skill]);
											}
										}}>
										{({ selected }) => (
											<>
												<span
													className={`block truncate ${
														selected ? "font-medium" : "font-normal"
													}`}>
													{skill.name}
												</span>
											</>
										)}
									</Combobox.Option>
								))
							)}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>

			<div className="flex flex-wrap gap-2 mt-2">
				{selectSkills.map((skill) => (
					<div
						key={skill.id}
						className="flex items-center justify-center px-2 py-1 bg-accent rounded-md text-accent-foreground text-sm">
						{skill.name}

						<button
							className="ml-2"
							onClick={() => {
								setSelectSkills(
									selectSkills.filter((selectedSkill) => {
										return selectedSkill.id !== skill.id;
									})
								);
							}}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
