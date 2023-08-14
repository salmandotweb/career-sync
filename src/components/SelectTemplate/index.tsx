// eslint-disable-next-line import/no-unresolved
import "@splidejs/splide/css";

import Splide, { Splide as SplideCore } from "@splidejs/splide";
import { useEffect, useRef } from "react";
import { Global } from "@emotion/react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { AVAILABLE_TEMPLATES } from "@/lib/availableTemplates";
import { setTemplate } from "@/stores/slices/templates/templateSlice";

export const TemplateSlider = () => {
	const templateIndex = useAppSelector(
		(state) => state.template.activeTemplate
	).id;

	const dispatch = useAppDispatch();

	const targetElementRef = useRef<HTMLElement | null>(null);
	const splideInstanceRef = useRef<Splide | null>(null);

	useEffect(() => {
		const targetElement = targetElementRef.current;
		if (targetElement) {
			splideInstanceRef.current = new SplideCore(targetElement, {
				perPage: 2,
				pagination: false,
				gap: "0px",
				width: "100%",
				autoHeight: true,
				perMove: 1,
			});

			splideInstanceRef.current.mount();
		}

		return () => {
			splideInstanceRef.current && splideInstanceRef.current.destroy();
		};
	}, []);

	const onChangeTemplate = (templateId: string) => {
		dispatch(setTemplate(AVAILABLE_TEMPLATES[templateId]));
	};

	return (
		<div>
			<Global
				styles={{
					".splide__arrow svg": {
						fill: "#000000",
					},
					".splide__arrow--prev": {
						backgroundColor: "transparent",
					},
					".splide__arrow--next": {
						backgroundColor: "transparent",
					},
					".splide__arrow--prev:disabled": {
						cursor: "not-allowed",
					},
					".splide__arrow--next:disabled": {
						cursor: "not-allowed",
					},
				}}
			/>
			<section
				className="splide mt-[26px] mb-[32px] px-[40px]"
				ref={targetElementRef}>
				<div className="splide__track">
					<ul className="splide__list">
						{Object.keys(AVAILABLE_TEMPLATES).map((templateKey) => {
							const template = AVAILABLE_TEMPLATES[templateKey];
							const isActive = template.id === templateIndex;
							return (
								<TemplateSlide
									key={template.id}
									isActive={isActive}
									{...template}
									onChangeTemplate={onChangeTemplate}
								/>
							);
						})}
					</ul>
				</div>
			</section>
		</div>
	);
};

export const TemplateSlide = ({
	isActive,
	id,
	name,
	thumbnail,
	onChangeTemplate,
}: {
	isActive: boolean;
	id: string;
	name: string;
	thumbnail: string;
	onChangeTemplate: (id: string) => void;
}) => {
	return (
		<li className="splide__slide flex justify-center">
			<div
				className={`h-[255px] w-[180px] rounded border hover:cursor-pointer overflow-hidden relative ${
					isActive ? "border-resume-800" : "border-resume-200"
				}`}
				onClick={() => {
					onChangeTemplate(id);
				}}>
				<Image src={thumbnail} alt={name} layout="fill" />

				{isActive && (
					<div className="absolute top-1 right-1 bg-white rounded-full">
						<svg
							width="15"
							height="15"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
								fill="currentColor"
								fill-rule="evenodd"
								clip-rule="evenodd"></path>
						</svg>
					</div>
				)}
			</div>
		</li>
	);
};
