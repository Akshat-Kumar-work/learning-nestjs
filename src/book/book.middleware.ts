import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class BookMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("book specific middleware only")
    next();
  }
}