import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, ValidationPipe } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from './book.dto';

@Controller('book')
export class BookController {

    //here this approach is wrong as we have to create new instance each and every time so we use provider and injectable concepts
   // public bookServiceInstance:BookService = new BookService();

   //nest js has provided me its object or instance because we injected it into root module as provider
   constructor(private bookService:BookService){}

    @Post("/add-book")
    //function to add book
    addBook(@Body(new ValidationPipe)book:BookDto):string{
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
    @Get("/find-bookbyId/:bookId")
    //update book
    findBookbyId(@Param("bookId", ParseIntPipe)bookId:number):string{
        console.log(bookId, typeof(bookId));
        return `this will find a book by id ${bookId}`
    }

}
