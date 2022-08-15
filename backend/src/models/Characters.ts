import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Character {
    @Field(__type => ID)
    id: number;
    
    @Field()
    name: string;
    
    @Field()
    resume: string;
    
    @Field()
    planet: string;
    
    @Field()
    specie: string;

    @Field()
    memorablePhrase: string;

    @Field()
    icon: string;

    @Field()
    image: string;

    @Field()
    arms: string;

    @Field()
    skill: string;
}