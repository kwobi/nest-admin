import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Flavor } from "./flavor.entity";

@Entity()  //sql table === 括号里面的名字 ,不配置就默认为小写类名;
export class Cats {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    // name:string;
    title:string;

    @Column( {nullable:true} )
    description:string;

    @Column()
    brand:string;

    @Column( {default:0})
    recommendations: number;

    @JoinTable()
    @ManyToMany(
        type => Flavor , 
        flavor => flavor.cats,
        {
            cascade: true,
        }
        )
    flavor:Flavor[];
}