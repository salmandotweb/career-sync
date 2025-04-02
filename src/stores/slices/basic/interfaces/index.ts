export type IProfiles = {
  network: string;
  username: string;
  url: string;
  color?: string;
  template?: string[];
};

type ILocation = {
  city: string;
};

export interface BasicInfo {
  profileImage?: string;
  name: string;
  label: string;
  image: string;
  intro: string;
  email: string;
  phone: string;
  url: string;
  location: ILocation;
  profiles: IProfiles[];
}

export interface IBasicDetailsStore {
  values: BasicInfo;
  reset: (values: BasicInfo) => void;
}
