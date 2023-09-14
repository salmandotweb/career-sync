import { CustomCalendar } from "@/components/Calendar";
import { CheckboxWithText } from "@/components/Checkbox";
import FormInput from "@/components/FormInput";
import MultiSelect from "@/components/MultiSelect";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { formatDate } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { updateExperience } from "@/stores/slices/experiences/experienceSlice";
import { IExperienceItem } from "@/stores/slices/experiences/interfaces";
import { selectTemplate } from "@/stores/slices/templates/templateSlice";
import { FC } from "react";
import { TEMPLATES } from "@/enums/availableTemplates";

interface indexProps {
  experience: IExperienceItem;
}

const Fields: FC<indexProps> = ({ experience }) => {
  const dispatch = useAppDispatch();

  const ActiveTemplate = useAppSelector(selectTemplate);

  return (
    <div className="grid w-full max-w-sm items-center gap-4">
      <div className="flex items-center justify-end">
        <CheckboxWithText
          id="hideExperience"
          label="Hide this experience"
          value={experience.hide}
          onChange={(value) => {
            dispatch(
              updateExperience({
                index: Number(experience.id) - 1,
                updatedInfo: {
                  ...experience,
                  hide: value,
                },
              }),
            );
          }}
        />
      </div>
      {TEMPLATES.spectrum === ActiveTemplate.id && (
        <FormInput label="Company Logo" name="companyLogo">
          <Input
            type="text"
            id="companyLogo"
            placeholder="Paste the company logo URL"
            value={experience.companyLogo}
            onChange={(e) => {
              dispatch(
                updateExperience({
                  index: Number(experience.id) - 1,
                  updatedInfo: {
                    ...experience,
                    companyLogo: e.target.value,
                  },
                }),
              );
            }}
          />
        </FormInput>
      )}

      <FormInput label="Company Name" name="companyName">
        <Input
          type="text"
          id="companyName"
          placeholder="Enter your first experience"
          value={experience.name}
          onChange={(e) => {
            dispatch(
              updateExperience({
                index: Number(experience.id) - 1,
                updatedInfo: {
                  ...experience,
                  name: e.target.value,
                },
              }),
            );
          }}
        />
      </FormInput>
      <FormInput label="Position" name="position">
        <Input
          type="text"
          id="position"
          placeholder="Enter the position you held"
          value={experience.position}
          onChange={(e) => {
            dispatch(
              updateExperience({
                index: Number(experience.id) - 1,
                updatedInfo: {
                  ...experience,
                  position: e.target.value,
                },
              }),
            );
          }}
        />
      </FormInput>
      <FormInput label="Joining Date" name="joiningDate">
        <CustomCalendar
          date={new Date(experience.joiningDate)}
          setDate={(date) => {
            dispatch(
              updateExperience({
                index: Number(experience.id) - 1,
                updatedInfo: {
                  ...experience,
                  joiningDate: formatDate(date as Date),
                },
              }),
            );
          }}
        />
      </FormInput>
      <FormInput label="Leaving Date" name="leavingDate">
        <CustomCalendar
          date={new Date(experience.endDate ?? new Date())}
          disabled={experience.currentlyWorkHere}
          setDate={(date) => {
            dispatch(
              updateExperience({
                index: 0,
                updatedInfo: {
                  ...experience,
                  endDate: formatDate(date as Date),
                },
              }),
            );
          }}
        />
      </FormInput>
      <div className="flex items-center justify-end">
        <CheckboxWithText
          id="currentlyWorkHere"
          label="I currently work here"
          value={experience.currentlyWorkHere}
          onChange={(value) => {
            dispatch(
              updateExperience({
                index: Number(experience.id) - 1,
                updatedInfo: {
                  ...experience,
                  currentlyWorkHere: value,
                },
              }),
            );
          }}
        />
      </div>
      {TEMPLATES.spectrum === ActiveTemplate.id && (
        <FormInput label="Location" name="location">
          <Input
            type="text"
            id="location"
            placeholder="Enter the location of the company"
            value={experience.location}
            onChange={(e) => {
              dispatch(
                updateExperience({
                  index: Number(experience.id) - 1,
                  updatedInfo: {
                    ...experience,
                    location: e.target.value,
                  },
                }),
              );
            }}
          />
        </FormInput>
      )}
      {TEMPLATES.prisma === ActiveTemplate.id && (
        <>
          <FormInput label="Skills" name="skills">
            <MultiSelect
              maxSkills={5}
              selectSkills={experience.skills}
              setSelectSkills={(skills) => {
                dispatch(
                  updateExperience({
                    index: Number(experience.id) - 1,
                    updatedInfo: {
                      ...experience,
                      skills,
                    },
                  }),
                );
              }}
            />
          </FormInput>
          <FormInput label="Responsibilities" name="experience">
            {experience.responsibilities.map((item, index) => (
              <Textarea
                key={index}
                className="resize-none"
                placeholder={`${index + 1}.`}
                rows={3}
                value={item.responsibility ?? ""}
                onChange={(e) => {
                  const updatedResponsibilities = [
                    ...experience.responsibilities,
                  ];
                  updatedResponsibilities[index] = {
                    ...item,
                    responsibility: e.target.value,
                  };

                  dispatch(
                    updateExperience({
                      index: Number(experience.id) - 1,
                      updatedInfo: {
                        ...experience,
                        responsibilities: updatedResponsibilities,
                      },
                    }),
                  );
                }}
              />
            ))}
          </FormInput>
        </>
      )}
    </div>
  );
};

export default Fields;
