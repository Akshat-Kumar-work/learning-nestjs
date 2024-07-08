import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('book')
export class BookController {

    @Post("/add-book")
    //function to add book
    addBook():string{
        return "this will add book"
    }

    @Delete("/delete-book")
    //delete book
    deleteBook():string{
        return "this will delete book"
    }

    @Put("/update-book")
    //update book
    updateBook():string{
        return "this will update book"
    }

    @Get("/find-book")
    //update book
    findBook():string{
        return "this will find book"
    }

    //dynamic param route
    @Get("/find-bookbyId:bookId")
    //update book
    findBookbyId(@Param()params):string{
        console.log(params.bookId)
        return `this will find a book by id ${params.bookId}`
    }

}
