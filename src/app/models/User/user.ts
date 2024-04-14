export interface User {
    username: string;
    address: string ;
    email: string ;
    password: string ;
    role: string ;
    nom: string ;
    prenom: string;
    cin: number ;
    dateN: Date;
  


}



export enum role{

  
    EVENTORG,ADMIN,PARTICIPENT,COMPANY
}