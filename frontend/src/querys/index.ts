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

export const DETAILS_MOVIE_QUERY = gql`
  query Film($filmId: ID) {
    film(id: $filmId) {
      title
  }
}
`;

export const DETAILS_PEOPLE_QUERY = gql`
  query Person($personId: ID, $personId2: ID) {
    person(personID: $personId, id: $personId2) {
      birthYear
      eyeColor
      gender
      hairColor
      height
      name
      mass
    }
  }
`;

export const DETAILS_PEOPLE_QUERY2 = gql`
  query GetCharacters($getCharactersId: String!) {
    GetCharacters(id: $getCharactersId) {
      id
      name
      resume
      planet
      specie
      memorablePhrase
      icon
      image
      arms
      skill
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

