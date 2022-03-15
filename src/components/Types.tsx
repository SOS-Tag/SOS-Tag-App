import { ChangeEvent } from "react"
import { SheetContact } from "../generated/graphql"

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
  _id: string;
  enabled: boolean;
  fname: string;
  lname: string;
  sex: string;
  dateOfBirth: Date;
  nationality: string;
  bloodType: string;
  smoker: boolean;
  organDonor: boolean;
  advanceDirectives: boolean;
  allergies: string;
  medicalHistory: string;
  currentTreatment: string;
  treatingDoctor: string;
  emergencyContact1: string;
  emergencyContact2: string;
  user: string;
  createdAt: string;
  updatedAt: string;
}

export type fieldOption = {
  value : boolean | string | number,
  name : string,
}

export type fieldType = {
  label: string,
  mandatory: boolean,
  type: string,
  name: string,
  text?: string,
  option?: Array<fieldOption>,
  placeholder?: string | undefined,
  editing: boolean,
  onChange?: (e: any) => void,
}

export enum TextMessageType {
  error,
  modif,
  oups
}


export type ButtonType = {
  to?: string,
  box?: string,
  form?: string,
  type: string,
  buttonText: string,
  fullSize?: boolean,
  onClick?: (e:any) => void;
}