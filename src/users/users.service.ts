import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    addUser():string{
        return "this will add user"
    }

    findUsers():string{
        return "this will find all users"
    }
}
