import { Module } from '@nestjs/common';
import { Feature2Module } from './feature2/feature2.module';
import { Feature1Module } from './feature1/feature1.module';

@Module({
  imports: [Feature2Module,Feature1Module]
})
export class OrdersModule {
    constructor(){
        console.log('order module')
    }
}

