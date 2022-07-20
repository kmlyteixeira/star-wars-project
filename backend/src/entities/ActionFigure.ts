import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("actionfigure")
export class ActionFigure {

    @PrimaryColumn()
    id: string;

    @CreateDateColumn()
    acquisition_date: Date;

    @Column()
    comments: string;

    @Column()
    localization: string;

    @Column()
    id_user: string;

    @ManyToOne(() => User)
    @JoinColumn({name: "id_user"})
    user: User;

    /* yarn add uuid / yarn add @types/uuid -D*/
    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}