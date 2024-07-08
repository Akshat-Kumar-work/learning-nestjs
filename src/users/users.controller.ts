import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor( private userinstance :UsersService ){}

    @Get("/findAllUsers")
    findAllUser():string{
        return this.userinstance.findUsers();
    }


    @Post("/addUser")
    addUser():string{
        return this.userinstance.addUser();
    }
}
