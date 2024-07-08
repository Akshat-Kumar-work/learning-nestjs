import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserGuard } from './users.guard';

@Controller('users')
export class UsersController {

    constructor( private userinstance :UsersService ){}

    @Get("/findAllUsers")
    @UseGuards(new UserGuard())
    findAllUser():string{
        return this.userinstance.findUsers();
    }


    @Post("/addUser")
    addUser():string{
        return this.userinstance.addUser();
    }
}
