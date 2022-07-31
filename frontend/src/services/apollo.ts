import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache(),
});

export const intern = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});