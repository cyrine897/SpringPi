import { Role } from "./role";
import { Task } from "./task";

export interface User {
    idUser : number;
    userName :string;
    address: string;
    email : string;
    role : Role;
    task : Task[];
  file : File;
}
