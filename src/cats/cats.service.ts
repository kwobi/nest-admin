import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cats } from './entities/cats.entity';
import { Flavor } from './entities/flavor.entity';

@Injectable()
export class CatsService { 
    // private cats:Cats[] = [
    //     {
    //     id:1,
    //     name:'狸花猫',
    //     brand:'lihua',
    //     flavor:['chocolate','vanilla']
    //     },
    // ];

    constructor(
        @InjectRepository(Cats)
        private readonly catRepository: Repository<Cats>,

        @InjectRepository(Flavor)
        private readonly flavorRepository: Repository<Flavor>,
    ){}

    findAll(){
        // return this.cats;
        return this.catRepository.find({
            relations:['flavor']
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

    private async preloadFlavorByName(name:string):Promise<Flavor>{
        const existingFlavor = await this.flavorRepository.findOne({name});
        if(existingFlavor){
            return existingFlavor;
        }
        return this.flavorRepository.create({name});
    }

}
