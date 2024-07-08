import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {

    //here this approach is wrong as we have to create new instance each and every time so we use provider and injectable concepts
   // public bookServiceInstance:BookService = new BookService();

   constructor(private bookService:BookService){}

    @Post("/add-book")
    //function to add book
    addBook():string{
       return this.bookService.addBook();
    }

    @Delete("/delete-book")
    //delete book
    deleteBook():string{
        return this.bookService.delete();
    }

    @Put("/update-book")
    //update book
    updateBook():string{
        return this.bookService.updateBook();
    }

    @Get("/find-book")
    //update book
    findBook():string{
       return this.bookService.findBooks();
    }

    //dynamic param route
    @Get("/find-bookbyId:bookId")
    //update book
    findBookbyId(@Param()params):string{
        console.log(params.bookId)
        return `this will find a book by id ${params.bookId}`
    }

}
