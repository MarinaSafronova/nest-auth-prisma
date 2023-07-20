import { Controller, Delete, Get, Param, Post, Body, ParseUUIDPipe } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    createUser(@Body() dto) {
        return this.userService.create(dto);
    }

    @Get(':idOrEmail')
    findOne(@Param('idOrEmail') idOrEmail: string) {
        return this.userService.findOne(idOrEmail);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseUUIDPipe) id: string) {
        return this.userService.delete(id);
    }
}
