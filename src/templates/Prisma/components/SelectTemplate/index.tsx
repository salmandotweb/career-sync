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
		<div className="w-[500px]">
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
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M11.7533 0.623291C5.33716 0.623291 0.129883 5.83056 0.129883 12.2467C0.129883 18.6628 5.33716 23.87 11.7533 23.87C18.1694 23.87 23.3766 18.6628 23.3766 12.2467C23.3766 5.83056 18.1694 0.623291 11.7533 0.623291ZM9.42852 18.0585L3.61683 12.2468L5.25573 10.6079L9.42852 14.7691L18.2507 5.94697L19.8896 7.59749L9.42852 18.0585Z"
								fill="#59748F"
							/>
						</svg>
					</div>
				)}
			</div>
		</li>
	);
};
