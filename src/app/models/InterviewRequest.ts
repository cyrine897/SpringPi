import { Offer } from 'src/app/models/offer';
export class InterviewRequest {
    idInterviewRequest: number ;
    name: string ;
    email: string ;
    cv: File ;
    requestStatus: string ;
    offer: Offer;
    
  }

  