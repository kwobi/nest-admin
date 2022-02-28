import { Column, Entity, ManyToMany, PrimaryGeneratedColumn }  from 'typeorm';
import { Cats } from './cats.entity';


@Entity()
export class Flavor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany( type => Cats, cats => cats.flavor)
    cats: Cats[];
}


