import { CheckboxWithText } from "@/components/Checkbox";
import FormInput from "@/components/FormInput";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TEMPLATES } from "@/enums/availableTemplates";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
  selectEducation,
  updateEducation,
} from "@/stores/slices/education/educationSlice";
import { Education } from "@/stores/slices/education/interfaces";
import { selectTemplate } from "@/stores/slices/templates/templateSlice";

const Education = () => {
  const education = useAppSelector(selectEducation);
  const dispatch = useAppDispatch();

  const ActiveTemplate = useAppSelector(selectTemplate);

  return (
    <>
      <Tabs defaultValue="University" className="w-full">
        <TabsList
          className={`w-full mb-5 ${
            TEMPLATES.prisma === ActiveTemplate.id ? "hidden" : "flex"
          }`}
        >
          {education?.map((education: Education) => (
            <TabsTrigger
              key={education.type}
              value={education.type}
              className="w-full"
            >
              {education.type}
            </TabsTrigger>
          ))}
        </TabsList>

        <ScrollArea className="h-[67vh] w-full">
          {education?.map((education: Education, index: number) => (
            <TabsContent
              key={education.type}
              value={education.type}
              className="w-full flex items-start flex-col gap-5"
            >
              <FormInput label="Degree" name="degree">
                <Input
                  type="text"
                  id="degree"
                  placeholder="Enter the name of your degree"
                  value={education.degree}
                  onChange={(e) => {
                    dispatch(
                      updateEducation({
                        index: Number(index),
                        updatedInfo: {
                          ...education,
                          degree: e.target.value,
                        },
                      }),
                    );
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
                      updateEducation({
                        index: Number(index),
                        updatedInfo: {
                          ...education,
                          institution: e.target.value,
                        },
                      }),
                    );
                  }}
                />
              </FormInput>
              <FormInput label="Starting Year" name="startingYear">
                <Input
                  type="text"
                  id="degree"
                  placeholder="Enter the year you started"
                  value={education.startYear}
                  onChange={(e) => {
                    dispatch(
                      updateEducation({
                        index: Number(index),
                        updatedInfo: {
                          ...education,
                          startYear: e.target.value,
                        },
                      }),
                    );
                  }}
                />
              </FormInput>
              <FormInput label="Ending Year" name="endingYear">
                <Input
                  type="text"
                  id="degree"
                  disabled={education.currentlyEnrolled}
                  placeholder="Enter the year you graduated"
                  value={education.endYear || ""}
                  onChange={(e) => {
                    dispatch(
                      updateEducation({
                        index: Number(index),
                        updatedInfo: {
                          ...education,
                          endYear: e.target.value,
                        },
                      }),
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
                        index: Number(index),
                        updatedInfo: {
                          ...education,
                          currentlyEnrolled: value,
                        },
                      }),
                    );
                  }}
                />
              </div>
            </TabsContent>
          ))}
        </ScrollArea>
      </Tabs>
    </>
  );
};

export default Education;
