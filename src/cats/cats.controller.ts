import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { response } from 'express';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

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
    }

    @Post()
    create(@Body() createCatDto:CreateCatDto){
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
