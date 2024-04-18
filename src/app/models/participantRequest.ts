import { Status } from "./Status";
import { TypeTask } from "./typeTask";
export class ParticipantRequest {

    idParticipantRequest: number;

    userName: string;
    email: string;
    typeTask: TypeTask;
    file: File; // Ajoutez l'attribut pour le fichier CV
    contentType: string;
    filename: string;
    invoiceNo: string;
    status: Status;
}