import { UserDto } from './user.dto';
import { UserEntity } from 'src/db/entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    create(newUser: UserDto): Promise<{
        id: string;
        username: string;
    }>;
    findByUserName(username: string): Promise<UserDto | null>;
}
