import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from 'src/db/entities/task.entity';
//imports: [TaskModule, AuthModule],
@Module({
    imports: [AuthModule, TypeOrmModule.forFeature([TaskEntity])],
    controllers: [TaskController],
    providers: [TaskService]
})
export class TaskModule {}
