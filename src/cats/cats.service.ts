import { Injectable } from '@nestjs/common';
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
        return this.cats.find(item => item.id === +id);
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
