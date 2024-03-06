export interface AffectationRequest {
    id: number;
    status: string;
    user: {
        id: number;
        name: string;
        // Autres propriétés de l'utilisateur
    };
    task: {
        id: number;
        name: string;
        // Autres propriétés de la tâche
    };


}