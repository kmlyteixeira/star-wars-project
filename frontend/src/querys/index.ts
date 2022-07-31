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

export const ADD_MOVIE_MUTATION = gql`
mutation($comment: String!, $value: String!, $acquired: String!, $title: String!) {
  AddMovie(comment: $comment, value: $value, acquired: $acquired, title: $title) {
    id
  }
}
`;

