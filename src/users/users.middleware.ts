import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const protocol = req.protocol;
    const host = req.get("host")//local host
    let url = req.originalUrl;
    var method = req.method;
    let date = new Date().toISOString();

    console.log(protocol,host,url,method,date)
    console.log("users module specific middleware")
    next();
  }
}
