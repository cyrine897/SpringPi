import { TypeTask } from "./typeTask";
export class ParticipantRequest {

   

    userName: string;
    email: string;
    typeTask: TypeTask;
    file: File; // Ajoutez l'attribut pour le fichier CV
    contentType: string;
    filename: string;

}