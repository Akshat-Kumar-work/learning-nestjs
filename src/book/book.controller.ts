import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {

    public bookServiceInstance:BookService = new BookService();

    @Post("/add-book")
    //function to add book
    addBook():string{
       return this.bookServiceInstance.addBook();
    }

    @Delete("/delete-book")
    //delete book
    deleteBook():string{
        return this.bookServiceInstance.delete();
    }

    @Put("/update-book")
    //update book
    updateBook():string{
        return this.bookServiceInstance.updateBook();
    }

    @Get("/find-book")
    //update book
    findBook():string{
       return this.bookServiceInstance.findBooks();
    }

    //dynamic param route
    @Get("/find-bookbyId:bookId")
    //update book
    findBookbyId(@Param()params):string{
        console.log(params.bookId)
        return `this will find a book by id ${params.bookId}`
    }

}
