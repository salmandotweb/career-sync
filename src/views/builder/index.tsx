import { useAppSelector } from "@/stores/hooks";
import {
	selectBasicInfo,
	updateBasicInfo,
} from "@/stores/slices/basic/basicInfoSlice";
import { ChangeEvent, FC } from "react";
import { useDispatch } from "react-redux";

interface indexProps {}

const Builder: FC<indexProps> = ({}) => {
	const basicInfo = useAppSelector(selectBasicInfo);
	const dispatch = useDispatch();

	return (
		<div>
			<input
				style={{
					border: "1px solid #000",
					color: "#000",
				}}
				value={basicInfo.name}
				onChange={(event: ChangeEvent<HTMLInputElement>) => {
					dispatch(
						updateBasicInfo({
							...basicInfo,
							name: event.target.value,
						})
					);
				}}
			/>
		</div>
	);
};

export default Builder;
