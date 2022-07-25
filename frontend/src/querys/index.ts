import { gql } from "@apollo/client";

export const MOVIES_QUERY = gql`
{
  allFilms {
    films {
     title
     id         
    }
  }
}
`;


export const CHARACTERS_QUERY = gql`
{
  allPeople {
    people {
      id
      name
      species {
        name
      }
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