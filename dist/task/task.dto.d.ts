export declare enum TaskStatusEnum {
    TO_DO = "TO_DO",
    IN_PROGRESS = "IN_PROGRESS",
    DONE = "DONE"
}
export declare class TaskDto {
    id: string;
    title: string;
    description: string;
    status: string;
    expirationDate: Date;
}
export interface FindAllParameters {
    title: string;
    status: string;
}
export declare class TaskRouteParameters {
    id: string;
}
