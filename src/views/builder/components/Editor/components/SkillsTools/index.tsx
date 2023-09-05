import FormInput from "@/components/FormInput";
import MultiSelect from "@/components/MultiSelect";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TEMPLATES } from "@/enums/availableTemplates";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { SkillsTools as Skills } from "@/stores/slices/skills/interfaces";
import { selectSkills, updateSkills } from "@/stores/slices/skills/skillSlice";
import { selectTemplate } from "@/stores/slices/templates/templateSlice";

const SkillsTools = () => {
  const skills = useAppSelector(selectSkills);
  const dispatch = useAppDispatch();

  const ActiveTemplate = useAppSelector(selectTemplate);

  return (
    <>
      <Tabs defaultValue="Languages" className="w-[100%]">
        <TabsList
          className={`w-full mb-5 ${
            TEMPLATES.spectrum === ActiveTemplate.id ? "hidden" : "flex"
          }`}
        >
          {skills?.map((skill) => {
            return (
              <TabsTrigger
                key={skill.title}
                value={skill.title.toString()}
                className="w-full"
              >
                {skill.title}
              </TabsTrigger>
            );
          })}
        </TabsList>
        <ScrollArea className="h-[67vh] w-full">
          {skills?.map((skill: Skills) => (
            <TabsContent
              key={skill.title}
              value={skill.title.toString()}
              className="w-full flex items-start flex-col gap-5"
            >
              {skill.frontendRelated && (
                <FormInput label="Frontend Related" name="frontendRelated">
                  <MultiSelect
                    placeholder="Select frontend languages you know"
                    unlimited
                    selectSkills={skill.frontendRelated}
                    setSelectSkills={(skills) => {
                      dispatch(
                        updateSkills({
                          index: 0,
                          updatedInfo: {
                            ...skill,
                            frontendRelated: skills,
                          },
                        }),
                      );
                    }}
                  />
                </FormInput>
              )}

              {skill.uiRelated && (
                <FormInput label="UI Related" name="UIRelated">
                  <MultiSelect
                    placeholder="Select UI languages you know"
                    unlimited
                    selectSkills={skill.uiRelated}
                    setSelectSkills={(skills) => {
                      dispatch(
                        updateSkills({
                          index: 0,
                          updatedInfo: {
                            ...skill,
                            uiRelated: skills,
                          },
                        }),
                      );
                    }}
                  />
                </FormInput>
              )}

              {skill.backendRelated && (
                <FormInput label="Backend Related" name="backendRelated">
                  <MultiSelect
                    placeholder="Select backend languages you know"
                    unlimited
                    selectSkills={skill.backendRelated}
                    setSelectSkills={(skills) => {
                      dispatch(
                        updateSkills({
                          index: 0,
                          updatedInfo: {
                            ...skill,
                            backendRelated: skills,
                          },
                        }),
                      );
                    }}
                  />
                </FormInput>
              )}

              {skill.coderRelated && (
                <FormInput label="Coder Related" name="coderRelated">
                  <MultiSelect
                    placeholder="Select code related tools you use"
                    unlimited
                    selectSkills={skill.coderRelated}
                    setSelectSkills={(skills) => {
                      dispatch(
                        updateSkills({
                          index: 0,
                          updatedInfo: {
                            ...skill,
                            coderRelated: skills,
                          },
                        }),
                      );
                    }}
                  />
                </FormInput>
              )}

              {skill.designerRelated && (
                <FormInput label="Designer Related" name="designerRelated">
                  <MultiSelect
                    placeholder="Select design related tools you use"
                    unlimited
                    selectSkills={skill.designerRelated}
                    setSelectSkills={(skills) => {
                      dispatch(
                        updateSkills({
                          index: 0,
                          updatedInfo: {
                            ...skill,
                            designerRelated: skills,
                          },
                        }),
                      );
                    }}
                  />
                </FormInput>
              )}
            </TabsContent>
          ))}
        </ScrollArea>
      </Tabs>
    </>
  );
};

export default SkillsTools;
