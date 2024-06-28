import { FindAllParameters, TaskDto } from './task.dto';
import { TaskEntity } from 'src/db/entities/task.entity';
import { Repository } from 'typeorm';
export declare class TaskService {
    private readonly taskRepository;
    private tasks;
    constructor(taskRepository: Repository<TaskEntity>);
    create(task: TaskDto): Promise<TaskDto>;
    findById(id: string): Promise<TaskDto>;
    findAll(params: FindAllParameters): Promise<TaskDto[]>;
    update(id: string, task: TaskDto): Promise<void>;
    remove(id: string): Promise<void>;
    private mapEntityToDto;
    private mapDtoToEntity;
}
