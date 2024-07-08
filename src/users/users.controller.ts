import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserGuard } from './users.guard';
import { User } from './user.entity';

@Controller('users')
export class UsersController {

    constructor( private userinstance :UsersService ){}

    @Get("/findAllUsers")
    @UseGuards(new UserGuard())
    findAllUser():string{
        return this.userinstance.findUsers();
    }


    @Get("/findUserbyName")
    findUser(@Query('name')name:string):User{
        return this.userinstance.getUserByName(name)
    }

    @Post("/addUser")
    addUser():string{
        return this.userinstance.addUser();
    }
}
