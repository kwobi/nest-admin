import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cats } from './entities/cats.entity';

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
    ){}

    findAll(){
        // return this.cats;
        return this.catRepository.find();
    }

    async findOne(id:string){
        const cat = await this.catRepository.findOne(id);
        if(!cat){
            throw new NotFoundException(`没有找到id为${id}的猫`);
        }
        return cat
    }

    create(createCatDto:CreateCatDto){
        const cat = this.catRepository.create(createCatDto);
        return this.catRepository.save(cat);
    }

    async update(id:string, updateCatDto:UpdateCatDto){
        const cat = await this.catRepository.preload({
            id: +id,
            ...updateCatDto,
        });
        if(!cat){
            throw new NotFoundException(`没有找到id为${id}的猫`);
        }
        return this.catRepository.save(cat);
    }

    async remove(id:string){
        const catIndex = await this.findOne(id);
        return this.catRepository.remove(catIndex);
    }

}
