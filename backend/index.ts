import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import path from 'path';
import { buildSchema } from 'type-graphql';
import { MovieResolver } from './src/resolvers/MovieResolver';

async function main() {
    const schema = await buildSchema({
        resolvers: [
            MovieResolver,
        ],
        emitSchemaFile: path.join(__dirname, 'schema.gql'),
    })

    const server = new ApolloServer({
        schema,
    })

    const { url } = await server.listen()

    console.log(`Server is running on ${url}`);
}

main();