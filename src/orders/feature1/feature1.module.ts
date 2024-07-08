import { Module } from '@nestjs/common';

@Module({})
export class Feature1Module {
    constructor(){
        console.log('feature 1 module')
    }
}
