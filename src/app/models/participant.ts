import { DegreeType } from "./degree-type";
import { ParticipantType } from "./participant-type";
import { SpecialityType } from "./speciality-type";
import { User } from "./user";

export interface Participant extends User{
    birth_date: Date;
    availability: Date;
  message: string;
  whyJoin: string;
  cv: File;
  motivationLetter: File;
  specialityType: SpecialityType;
  degreeType: DegreeType;
  participantType: ParticipantType;}
  
