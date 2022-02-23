import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()  //sql table === 括号里面的名字 ,不配置就默认为小写类名;
export class Cats {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    brand:string;

    @Column('json',{nullable:true})
    flavor:string[];
}