export type IProfiles = {
    network: string;
    username: string;
    url: string;
    color: string;
};

type ILocation = {
    city: string;
};

export interface BasicInfo {
    name: string;
    label: string;
    image: string;
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
