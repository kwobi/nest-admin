import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/entities/event.entity';
import { CATS_BRANDS } from './cats.constants';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cats } from './entities/cats.entity';
import { Flavor } from './entities/flavor.entity';


class MockCatsService {}

@Module({
    imports: [TypeOrmModule.forFeature([Cats, Flavor, Event])],
    controllers: [CatsController],
    // 1.providers: [CatsService],
    
    // 2.providers: [{
    //     provide: CatsService,
    //     useValue: new MockCatsService()
    // }],

    providers:[CatsService,{provide:CATS_BRANDS,useValue:['buddy brew','nescafe']}],
    exports: [CatsService],
})
export class CatsModule {}
