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


export const CHARACTERS_QUERY = gql`
{
  allPeople {
    people {
      id
      eyeColor
      birthYear
      gender
      hairColor
      height
      name
      filmConnection {
        films {
          id
        }
      }
    }
  }
}
`;

export const VEHICLES_QUERY = gql`
{
  allVehicles {
    vehicles {
      id
      name
      vehicleClass
      maxAtmospheringSpeed
      filmConnection {
        films {
          id
          title
        }
      }
    }
  }
}
`;