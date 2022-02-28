import { Injectable, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/entities/event.entity';
import { CATS_BRANDS } from './cats.constants';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cats } from './entities/cats.entity';
import { Flavor } from './entities/flavor.entity';


class ConfigServoce {}
class DevelopmentConfigService {}
class ProductionConfigService {}

class MockCatsService {}

@Injectable()
export class CatsBrandsFactory {
    create(){
        return ['buddy', 'nescafe'];
    }
}

@Module({
    imports: [TypeOrmModule.forFeature([Cats, Flavor, Event])],
    controllers: [CatsController],
    // 1.providers: [CatsService],
    
    // 2.providers: [{
    //     provide: CatsService,
    //     useValue: new MockCatsService()
    // }],

    // 3.
    providers:[
        CatsService,
        CatsBrandsFactory,
        { 
        provide: CATS_BRANDS,
        useFactory: () => ['buddy', 'nescafe'],
        inject: [CatsBrandsFactory],    
        },
    ],


    // providers:[
    //     CatsService,
    //     {
    //         provide:CATS_BRANDS,
    //         useClass:process.env.NODE_ENV === 'development' ? DevelopmentConfigService : ProductionConfigService,
    //     },
    //     {provide:CATS_BRANDS,useValue:['buddy brew','nescafe']}
    // ],
    exports: [CatsService],
})
export class CatsModule {}
