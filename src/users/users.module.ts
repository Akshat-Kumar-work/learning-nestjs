import { Module } from '@nestjs/common';

@Module({})
export class UsersModule {
    constructor(){
        console.log('user module')
    }
}
