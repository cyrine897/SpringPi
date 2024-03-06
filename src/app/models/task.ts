import { timestamp } from "rxjs";
import { TypeTask } from "./typeTask";
export interface Task {
    idTask: number;
    name: string;
    description: string;
   
    typeTask: TypeTask;
}

