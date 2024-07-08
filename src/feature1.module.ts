import { Module } from '@nestjs/common';


@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports:[]
})
export class Feature1Module {
  constructor(){
    console.log('feature 1 module')
  }
}
