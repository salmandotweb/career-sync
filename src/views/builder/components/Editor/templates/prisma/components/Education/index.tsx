import { CustomCalendar } from "@/components/Calendar";
import { CheckboxWithText } from "@/components/Checkbox";
import FormInput from "@/components/FormInput";
import { Input } from "@/components/ui/input";
import { formatDate } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
	selectEducation,
	updateEducation,
} from "@/stores/slices/prisma/education/educationSlice";

const Education = () => {
	const education = useAppSelector(selectEducation);
	const dispatch = useAppDispatch();

	return (
		<div className="w-full flex items-start flex-col gap-5">
			<FormInput label="Degree" name="degree">
				<Input
					type="text"
					id="degree"
					placeholder="Enter the name of your degree"
					value={education.degree}
					onChange={(e) => {
						dispatch(updateEducation({ ...education, degree: e.target.value }));
					}}
				/>
			</FormInput>
			<FormInput label="Name of institution" name="institution">
				<Input
					type="text"
					id="institution"
					placeholder="Enter the name of your institution"
					value={education.institution}
					onChange={(e) => {
						dispatch(
							updateEducation({ ...education, institution: e.target.value })
						);
					}}
				/>
			</FormInput>
			<FormInput label="Joining Date" name="joiningDate">
				<CustomCalendar
					date={new Date(education.startDate)}
					setDate={(date) => {
						dispatch(
							updateEducation({
								...education,
								startDate: formatDate(date as Date),
							})
						);
					}}
				/>
			</FormInput>
			<FormInput label="Ending Date" name="endingDate">
				<CustomCalendar
					date={new Date(education.endDate ?? new Date())}
					disabled={education.currentlyEnrolled}
					setDate={(date) => {
						dispatch(
							updateEducation({
								...education,
								endDate: String(date),
							})
						);
					}}
				/>
			</FormInput>
			<div className="flex items-center justify-end">
				<CheckboxWithText
					id="currentlyEnrolled"
					label="I currently study here"
					value={education.currentlyEnrolled}
					onChange={(value) => {
						dispatch(
							updateEducation({
								...education,
								currentlyEnrolled: value,
							})
						);
					}}
				/>
			</div>
		</div>
	);
};

export default Education;
