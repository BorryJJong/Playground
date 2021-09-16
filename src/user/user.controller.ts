import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getAll(): User[] {
        return this.userService.getAll();
    }

    @Get("/:id")
    getOne(@Param("id") userId: number): User {
        return this.userService.getOne(userId);
    }

    @Post()
    create(@Body() userData: any) {
        // any 부분은 dto를 정의하면서 채웁니다
        return this.userService.create(userData);
    }

    @Delete("/:id")
    remove(@Param("id") userId: number) {
        return this.userService.deleteOne(userId);
    }

    @Patch("/:id")
    patch(@Param("id") userId: number, @Body() updateData: any) {
        // any 부분은 dto를 정의하면서 채웁니다
        return this.userService.update(userId, updateData);
    }
}