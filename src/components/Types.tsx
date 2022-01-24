export type MedicalCardTypeGeneral = {
  name: string,
  surname: string,
  gender: string,
  birthdate: string,
  size: number,
  weight: number,
  bloodtype: string,
  smoker: boolean,
  organDonation: boolean,
  guidelines: boolean
}

export type MedicalCardTypeHealth = {
  allergy : string,
  treatments : string,
  missingVaccines : boolean,
  diabetes : string,
  hemophilia : boolean,
  epilepsy : boolean,
  pacemaker : boolean
}

export type MedicalCardTypeContact = {
  drName: string,
  drPhone: string,
  labName: string,
  labPhone: string,
  emergencyName: string,
  emergencyPhone: string,
  emergencyRole: string
}

export type medicalCardType = {
  id : number,
  isActivated : boolean,
  general: MedicalCardTypeGeneral,
  sante: MedicalCardTypeHealth,
  contact : MedicalCardTypeContact;
}

export type fieldOption = {
  value : boolean | string | number,
  name : string,
}

export type fieldType = {
  label : string,
  type : string,
  mandatory : boolean,
  option?: Array<fieldOption>
  value? : string | number | readonly string[] | undefined, 
  placeholder? : string | undefined,
  name? : string, 
  text? : string,
  editing : boolean,
  onChange? : (value : any) => void,
}

export enum TextMessageType {
  error,
  modif,
  oups
}
