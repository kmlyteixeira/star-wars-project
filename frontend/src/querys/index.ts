const MOVIES_QUERY = `
{
  allFilms {
    films {
     title
     id         
    }
  }
}
`;

export default MOVIES_QUERY;