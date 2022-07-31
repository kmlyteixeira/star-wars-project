import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Movie {
    @Field(__type => ID)
    id: string;
    
    @Field()
    title: string;
    
    @Field()
    acquired: string;
    
    @Field()
    value: string;
    
    @Field()
    comment: string;
}