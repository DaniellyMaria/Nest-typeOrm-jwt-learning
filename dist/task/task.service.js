"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const task_dto_1 = require("./task.dto");
const typeorm_1 = require("@nestjs/typeorm");
const task_entity_1 = require("../db/entities/task.entity");
const typeorm_2 = require("typeorm");
let TaskService = class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
        this.tasks = [];
    }
    async create(task) {
        const taskToSave = {
            title: task.title,
            description: task.description,
            expirationDate: task.expirationDate,
            status: task_dto_1.TaskStatusEnum.TO_DO
        };
        const createdTask = await this.taskRepository.save(taskToSave);
        return this.mapEntityToDto(createdTask);
    }
    async findById(id) {
        const foundTask = await this.taskRepository.findOne({ where: { id } });
        if (!foundTask) {
            throw new common_1.HttpException(`Task with id ${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        return this.mapEntityToDto(foundTask);
    }
    async findAll(params) {
        const searchParams = {};
        if (params.title) {
            searchParams.title = (0, typeorm_2.Like)(`%${params.title}%`);
        }
        if (params.status) {
            searchParams.status = (0, typeorm_2.Like)(`%${params.status}%`);
        }
        const tasksFound = await this.taskRepository.find({
            where: searchParams
        });
        return tasksFound.map(taskEntity => this.mapEntityToDto(taskEntity));
    }
    async update(id, task) {
        const foundTask = await this.taskRepository.findOne({ where: { id } });
        if (!foundTask) {
            throw new common_1.HttpException(`Task with id ${task.id} not found`, common_1.HttpStatus.BAD_REQUEST);
        }
        await this.taskRepository.update(id, this.mapDtoToEntity(task));
    }
    async remove(id) {
        const result = await this.taskRepository.delete(id);
        if (!result.affected) {
            throw new common_1.HttpException(`Task with id ${id} not found`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    mapEntityToDto(taskEntity) {
        return {
            id: taskEntity.id,
            title: taskEntity.title,
            description: taskEntity.description,
            expirationDate: taskEntity.expirationDate,
            status: task_dto_1.TaskStatusEnum[taskEntity.status]
        };
    }
    mapDtoToEntity(taskDto) {
        return {
            title: taskDto.title,
            description: taskDto.description,
            expirationDate: taskDto.expirationDate,
            status: taskDto.status.toString()
        };
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.TaskEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TaskService);
//# sourceMappingURL=task.service.js.map