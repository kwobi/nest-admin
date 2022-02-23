import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { response } from 'express';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private catsService:CatsService){}

    @Get()
    findAll(@Query() paginationQuery){
        // const {limit,offset} = paginationQuery;
        return this.catsService.findAll();
        // return `This action returns all cats.Limit: ${limit}, offset: ${offset}`;
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.catsService.findOne(id);
        // return `This action returns #${id} coffee`;
    }

    @Post()
    create(@Body() body){
        // return body;
        return this.catsService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() body){
        // return `this action update #${id} coffee;`    
        return this.catsService.update(id,body);
    }

    @Delete(':id')  
    remove(@Param('id') id:string){
        // return `this action remove #${id} coffee;`
        return this.catsService.remove(id);
    }


}
