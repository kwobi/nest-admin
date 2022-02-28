import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cats } from './entities/cats.entity';
import { Flavor } from './entities/flavor.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Cats, Flavor])],
    controllers: [CatsController],
    providers: [CatsService],
})
export class CatsModule {}
