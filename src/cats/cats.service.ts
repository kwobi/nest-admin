import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Cats } from './entities/cats.entity';

@Injectable()
export class CatsService { 
    private cats:Cats[] = [
        {
        id:1,
        name:'狸花猫',
        brand:'lihua',
        flavor:['chocolate','vanilla']
        },
    ];

    findAll(){
        return this.cats;
    }

    findOne(id:string){
        
        const cat =  this.cats.find(item => item.id === +id);
        if(!cat){
            // throw new HttpException(`没有找到id为${id}的猫`, HttpStatus.NOT_FOUND);
            // 这种写法更简洁、优雅
            throw new NotFoundException(`没有找到id为${id}的猫`);
        }
        return cat
    }

    create(createCatDto:any){
        this.cats.push(createCatDto);
    }

    update(id:string, updateCatDto:any){
        const existingCat = this.findOne(id);
        if(existingCat){

        }
    }

    remove(id:string){
        const catIndex = this.cats.findIndex(item => item.id === +id);
        if(catIndex !== -1){
            this.cats.splice(catIndex,1);
        }
    }

}
