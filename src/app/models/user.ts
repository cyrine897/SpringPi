<<<<<<< HEAD
export interface User {
    idUser : number;
    firstName :string;
    lastName :string;
    address: string;
    mail : string ;

=======
import { Role } from "./role";
import { Task } from "./task";

export interface User {
    idUser : number;
    userName :string;
    address: string;
    mail : string ;
    role : Role;
    task : Task[];
>>>>>>> gestion_participant

}
