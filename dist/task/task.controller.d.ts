import { FindAllParameters, TaskDto, TaskRouteParameters } from './task.dto';
import { TaskService } from './task.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(task: TaskDto): Promise<TaskDto>;
    asyncfindById(id: string): Promise<TaskDto>;
    findAll(params: FindAllParameters): Promise<TaskDto[]>;
    update(params: TaskRouteParameters, task: TaskDto): Promise<void>;
    remove(id: string): Promise<void>;
}
