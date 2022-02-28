import { HttpException, HttpStatus, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { query } from 'express';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { Event } from 'src/events/entities/event.entity';
import { Connection, Repository } from 'typeorm';
import { CATS_BRANDS } from './cats.constants';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cats } from './entities/cats.entity';
import { Flavor } from './entities/flavor.entity';

@Injectable()
export class CatsService { 

    constructor(
        @InjectRepository(Cats)
        private readonly catRepository: Repository<Cats>,

        @InjectRepository(Flavor)
        private readonly flavorRepository: Repository<Flavor>,
        private readonly connection: Connection,
        @Inject(CATS_BRANDS) catsBrands: string[],
    ){
        console.log(catsBrands);
    }

    findAll(paginationQuery:PaginationQueryDto){
        // return this.cats;
        const {limit,offset} = paginationQuery;
        return this.catRepository.find({
            relations:['flavor'],
            skip:offset,
            take:limit,
        });
    }

    async findOne(id:string){
        const cat = await this.catRepository.findOne(id , {
            relations:['flavor']
        });
        if(!cat){
            throw new NotFoundException(`没有找到id为${id}的猫`);
        }
        return cat
    }

    async create(createCatDto:CreateCatDto){
        // const cat = this.catRepository.create(createCatDto);
        // return this.catRepository.save(cat);
        const flavor = await Promise.all(
            createCatDto.flavor.map(name=>this.preloadFlavorByName(name))
        );

        const cat = this.catRepository.create({
            ...createCatDto,
            flavor,
        });
        return this.catRepository.save(cat);
    }

    async update(id:string, updateCatDto:UpdateCatDto){
        const flavor = 
        updateCatDto.flavor &&
        ( await Promise.all(
            updateCatDto.flavor.map(name=>this.preloadFlavorByName(name))
        ));

        const coffee = await this.catRepository.preload({
            id: +id,
            ...updateCatDto,
            flavor,
        });
        if(!coffee){
            throw new NotFoundException(`没有找到id为${id}的猫`);
        }
        return this.catRepository.save(coffee);
    }

    async remove(id:string){
        const catIndex = await this.findOne(id);
        return this.catRepository.remove(catIndex);
    }

    async recommendCat(cat: Cats){
        const queryRunner = this.connection.createQueryRunner();
        //链接数据库 并开启事务 
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try{
            cat.recommendations++;

            const recommendEvent = new Event();
            recommendEvent.name = 'recommend_cat';
            recommendEvent.type = 'cat';
            recommendEvent.payload = { catID:cat.id };

            await queryRunner.manager.save(cat);
            await queryRunner.manager.save(recommendEvent);

            await queryRunner.commitTransaction();
        }catch(err){
            await queryRunner.rollbackTransaction();
        } finally{
            await queryRunner.release();
        }
    }


    private async preloadFlavorByName(name:string):Promise<Flavor>{
        const existingFlavor = await this.flavorRepository.findOne({name});
        if(existingFlavor){
            return existingFlavor;
        }
        return this.flavorRepository.create({name});
    }

}
