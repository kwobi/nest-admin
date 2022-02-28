import { Injectable } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';

@Injectable()
export class CatsRatingService {
    constructor(private readonly catsService: CatsService){
        
    }
}
