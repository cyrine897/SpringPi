// src/app/models/call-for-tender.model.ts
import { User } from "./user";


export interface CallForTender {
    pdfFileName: any;
    idCOT: number;
    description: string;
    quantity: number;
    name: string;
    admin: User;
    eventOrganizers: User[];
  }
  
 
  