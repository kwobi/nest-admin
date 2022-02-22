import { Body, Controller, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { response } from 'express';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(): string {
        return 'This action returns all cats';
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
        
    }
}
