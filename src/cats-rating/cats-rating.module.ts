import { Module } from '@nestjs/common';
import { CatsModule } from 'src/cats/cats.module';
import { CatsRatingService } from './cats-rating.service';

@Module({
  imports: [CatsModule],
  providers: [CatsRatingService]
})
export class CatsRatingModule {}
