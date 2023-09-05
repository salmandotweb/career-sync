import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { TEMPLATES } from "@/enums/availableTemplates";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
  selectBasicInfo,
  updateBasicInfo,
} from "@/stores/slices/basic/basicInfoSlice";
import { selectTemplate } from "@/stores/slices/templates/templateSlice";

const EditBasicInfo = () => {
  const basicInfo = useAppSelector(selectBasicInfo);
  const dispatch = useAppDispatch();

  const ActiveTemplate = useAppSelector(selectTemplate);

  return (
    <>
      <Tabs defaultValue="about" className="w-[100%]">
        <TabsList className="w-full mb-5">
          <TabsTrigger value="about" className="w-full">
            About
          </TabsTrigger>
          <TabsTrigger value="contact" className="w-full">
            Contact
          </TabsTrigger>
          <TabsTrigger value="links" className="w-full">
            Links
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="about"
          className="w-full flex items-start flex-col gap-5"
        >
          {TEMPLATES.spectrum === ActiveTemplate.id && (
            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="profileImage">Profile Image</Label>
              <Input
                type="text"
                id="profileImage"
                placeholder="Paste your image url"
                value={basicInfo.profileImage}
                onChange={(e) => {
                  dispatch(
                    updateBasicInfo({
                      ...basicInfo,
                      profileImage: e.target.value,
                    }),
                  );
                }}
              />
            </div>
          )}

          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              placeholder="Name"
              value={basicInfo.name}
              onChange={(e) => {
                dispatch(
                  updateBasicInfo({
                    ...basicInfo,
                    name: e.target.value,
                  }),
                );
              }}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="designation">Designation</Label>
            <Input
              type="text"
              id="designation"
              placeholder="Designation"
              value={basicInfo.label}
              onChange={(e) => {
                dispatch(
                  updateBasicInfo({
                    ...basicInfo,
                    label: e.target.value,
                  }),
                );
              }}
            />
          </div>
          {TEMPLATES.spectrum === ActiveTemplate.id && (
            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="intro">Introduction</Label>
              <Textarea
                id="intro"
                placeholder="Your introduction"
                value={basicInfo.intro}
                rows={5}
                onChange={(e) => {
                  dispatch(
                    updateBasicInfo({
                      ...basicInfo,
                      intro: e.target.value,
                    }),
                  );
                }}
              />
            </div>
          )}
        </TabsContent>
        <TabsContent
          value="contact"
          className="w-full flex items-start flex-col gap-5"
        >
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="location">Location</Label>
            <Input
              type="text"
              id="location"
              placeholder="Enter your location"
              value={basicInfo.location.city}
              onChange={(e) => {
                dispatch(
                  updateBasicInfo({
                    ...basicInfo,
                    location: {
                      ...basicInfo.location,
                      city: e.target.value,
                    },
                  }),
                );
              }}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={basicInfo.email}
              onChange={(e) => {
                dispatch(
                  updateBasicInfo({
                    ...basicInfo,
                    email: e.target.value,
                  }),
                );
              }}
            />
          </div>
          {TEMPLATES.spectrum === ActiveTemplate.id && (
            <>
              <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="tel">Phone</Label>
                <Input
                  type="tel"
                  id="tel"
                  placeholder="Enter your phone number"
                  value={basicInfo.phone}
                  onChange={(e) => {
                    dispatch(
                      updateBasicInfo({
                        ...basicInfo,
                        phone: e.target.value,
                      }),
                    );
                  }}
                />
              </div>
            </>
          )}
        </TabsContent>
        <TabsContent
          value="links"
          className="w-full flex items-start flex-col gap-5"
        >
          {basicInfo.profiles.map((profile, index) => {
            return (
              profile.template?.includes(ActiveTemplate.id) && (
                <div
                  className="grid w-full max-w-sm items-center gap-2"
                  key={index}
                >
                  <Label htmlFor={profile.network}>
                    {profile.network.charAt(0).toUpperCase() +
                      profile.network.slice(1)}
                  </Label>
                  <div className="flex items-center gap-3 flex-col">
                    <Input
                      type="text"
                      id={profile.username}
                      placeholder="Username"
                      value={profile.username}
                      onChange={(e) => {
                        const newProfiles = basicInfo.profiles.map(
                          (item, i) => {
                            if (index === i) {
                              return {
                                ...item,
                                username: e.target.value,
                              };
                            }
                            return item;
                          },
                        );
                        dispatch(
                          updateBasicInfo({
                            ...basicInfo,
                            profiles: newProfiles,
                          }),
                        );
                      }}
                    />
                    <Input
                      type="url"
                      id={profile.network}
                      placeholder="Url"
                      value={profile.url}
                      onChange={(e) => {
                        const newProfiles = basicInfo.profiles.map(
                          (item, i) => {
                            if (index === i) {
                              return {
                                ...item,
                                url: e.target.value,
                              };
                            }
                            return item;
                          },
                        );
                        dispatch(
                          updateBasicInfo({
                            ...basicInfo,
                            profiles: newProfiles,
                          }),
                        );
                      }}
                    />
                  </div>
                </div>
              )
            );
          })}
        </TabsContent>
      </Tabs>
    </>
  );
};

export default EditBasicInfo;
