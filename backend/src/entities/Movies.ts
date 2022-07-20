import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("movies")
export class Movies {

    @PrimaryColumn()
    id: string;

    @Column()
    name_movie: string;

    @CreateDateColumn()
    acquisition_date: Date;

    @Column()
    number_times: number;

    @Column()
    sale_value: number;

    @Column()
    comments: string;

    @Column()
    id_user: string;

    @ManyToOne(() => User)
    @JoinColumn({name: "id_user"})
    user: User;

    /* yarn add uuid / yarn ass @types/uuid -D*/
    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}