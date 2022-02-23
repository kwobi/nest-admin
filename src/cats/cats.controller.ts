import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { response } from 'express';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService:CatsService){}

    @Get()
    findAll(@Query() paginationQuery): string {
        const {limit,offset} = paginationQuery;
        return `This action returns all cats.Limit: ${limit}, offset: ${offset}`;
    }

    @Get(':id')
    findOne(@Param('id') id:string): string {
        return `This action returns #${id} coffee`;
    }

    @Post()
    create(@Body() body){
        return body;
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() body){
        return `this action update #${id} coffee;`    
    }

    @Delete(':id')  
    remove(@Param('id') id:string){
        return `this action remove #${id} coffee;`
    }


}
