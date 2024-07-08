import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {

    public users: User[] = [
        {
            username:"user 1",
            password:"admin",
            email:"user1@gmail.com",
            age:22
        },
        {
            username:"user 2",
            password:"admin",
            email:"user1@gmail.com",
            age:22
        },
        {
            username:"user 3",
            password:"admin",
            email:"user1@gmail.com",
            age:22
        }
    ]

    addUser():string{
        return "this will add user"
    }

    findUsers():string{
        return "this will find all users"
    }

    getUserByName(userName:string):User{
        return this.users.find( (user)=>user.username === userName)
    }
}
