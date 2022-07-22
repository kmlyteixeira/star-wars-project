import { gql } from "@apollo/client";

const MOVIES_QUERY = gql `
query {
    allFilms {
      films {
        title
        id
      }
    }
  }
`;

export default MOVIES_QUERY;