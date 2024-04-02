export interface PersonalInfo {
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  prefix: string;
  upline: string | null;
  uplineContact: string | null;
}

export interface Credentials {
  email: string;
  username: string;
  password: string;
  passwordConfirmation: string | null;
}

export interface AddressType {
  country: string;
  province: string;
  city: string;
  street: string;
  postalCode: Number;
}

export interface OtherInfo {
  gender: string;
  maritalStatus: string;
  birthDate: Date;
  citizenship: string;
  mobileNumber: string;
  phoneNumber: string;
  addresses: {
    primaryAddress: AddressType;
    additionalAddress: [AddressType] | null;
  };
  websiteLink: string;
  facebookLink: string;
}

export interface Education {
  institution: string;
  degree: string;
}

export interface SkillsProfExp {
  specialSkills: [string];
  workExperience: [string];
  about: [string];
}

export interface SalesExpRef {
  jobDesc: string;
  salesTarget: Number;
  references: [string];
}

export interface Profile {
  id: string;
  name: string;
  link: string;
}

export interface Gallery {
  profile: Profile;
  banner: Profile | null;
}

export interface User {
  id: number;
  memberType: string;
  personalInfo: PersonalInfo;
  credentials: Credentials;
  otherInfo: OtherInfo;
  education: Education;
  skillsProfExp: SkillsProfExp;
  salesExpRef: SalesExpRef;
  gallery: Gallery;
  terms: boolean;
  fullName?: string;
}

export interface RegisterData {
  memberType: string;
  personalInfo: PersonalInfo;
  credentials: Credentials;
  otherInfo: OtherInfo;
  education: Education;
  skillsProfExp: SkillsProfExp;
  salesExpRef: SalesExpRef;
  terms: boolean;
}

export interface LoginData {
  username: string;
  password: string;
}
