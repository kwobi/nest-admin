import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { response } from 'express';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private catsService:CatsService){}

    @Get()
    findAll(@Query() paginationQuery: PaginationQueryDto){
        // const {limit,offset} = paginationQuery;
        // return `This action returns all cats.Limit: ${limit}, offset: ${offset}`;
        
        return this.catsService.findAll(paginationQuery);
    }

    @Get(':id')
    findOne(@Param('id') id:number){
        console.log(typeof id);
        
        return this.catsService.findOne(''+id);
    }

    @Post()
    create(@Body() createCatDto:CreateCatDto){
        console.log(createCatDto instanceof CreateCatDto);
        return this.catsService.create(createCatDto);
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() updateCatDto:UpdateCatDto){
        return this.catsService.update(id,updateCatDto);
    }

    @Delete(':id')  
    remove(@Param('id') id:string){
        return this.catsService.remove(id);
    }


}
