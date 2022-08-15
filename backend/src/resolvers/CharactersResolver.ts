import { Query, Resolver } from "type-graphql";
import { Character } from "../models/Characters";

@Resolver()
export class CharactersResolver {

    private data: Character[] = [
        {
            id: 1,
            name: "Luke Skywalker",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: ""
        },
        {
            id: 2,
            name: "Princesa Leia",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 3,
            name: "Han Solo",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 4,
            name: "Darth Vader",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 5,
            name: "R2-D2",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 6,
            name: "C-3PO",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 7,
            name: "Chewbacca",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 8,
            name: "Obi-Wan Kenobi",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 9,
            name: "Yoda",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 10,
            name: "Padmé Amidala",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 11,
            name: "Stormtrooper",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 12,
            name: "Darth Sidious",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 13,
            name: "Lando",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 14,
            name: "Rey",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 15,
            name: "Poe Dameron",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 16,
            name: "Kilo Ren",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 17,
            name: "General Hux",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 18,
            name: "Capitã Phasma",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 19,
            name: "Qui-Gon Jinn",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 20,
            name: "Mace Windu",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 21,
            name: "Jabba O Hutt",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 22,
            name: "Boba Fett",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 23,
            name: "Conde Dooku",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 24,
            name: "Governador Tarkin",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 25,
            name: "Almirante Ackbar",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 26,
            name: "General Grievous",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 27,
            name: "Jango Fett",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 28,
            name: "Darth Maul",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 29,
            name: "Jar Jar Binks",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 30,
            name: "Palpatine",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        },
        {
            id: 31,
            name: "Anakin Skywalker",
            resume: "",
            planet: "",
            specie: "",
            memorablePhrase: "",
            icon: "",
            image: "",
            arms: "",
            skill: "" 
        }        
    ];
    
    @Query(() => [Character])
    async GetCharacters() {
        return this.data;
    }

}