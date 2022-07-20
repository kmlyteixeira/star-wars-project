import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("user")
export class User {

    @PrimaryColumn()
    id: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    /* yarn add uuid / yarn add @types/uuid -D*/
    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}