import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { Response,Request,NextFunction } from 'express';

function globalMiddleware1(req:Request,res:Response,next:NextFunction){
  console.log("this is global middleware number one")
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.use(globalMiddleware1);
  await app.listen(3000);
}
bootstrap();
