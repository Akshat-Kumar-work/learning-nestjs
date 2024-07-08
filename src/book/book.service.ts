import { Injectable } from "@nestjs/common"

//in service file , it contain code for controllers

//injectable will create single object or instance of class and provide through out the applications

@Injectable()
export class BookService{

    addBook():string{
        return "this will add book"
    }

    updateBook():string{
        return "this will update book"
    }

    delete():string{
        return "this will delete book"
    }

    findBooks():string{
        return "this will find all books"
    }
}