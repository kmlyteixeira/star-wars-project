import { gql } from "@apollo/client";

export const MOVIES_QUERY = gql`
{
  allFilms {
    films {
      id
      created
      director
      episodeID
      openingCrawl
      title
    }
  }
}
`;

<<<<<<< HEAD
export const DETAILS_MOVIE_QUERY = gql`
  query Film($filmId: ID) {
    film(id: $filmId) {
      title
=======
export const MOVIE_DETAILS = gql`
query($filmId: ID) {
  film(id: $filmId) {
    id
    created
    director
    episodeID
    openingCrawl
    title
>>>>>>> 152c3711577408a6a644b3d9125c2b93c643207b
  }
}
`;

export const ADD_MOVIE_MUTATION = gql`
mutation($comment: String!, $value: String!, $acquired: String!, $title: String!) {
  AddMovie(comment: $comment, value: $value, acquired: $acquired, title: $title) {
    id
  }
}
`;

