import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { ContainerPage, TitlePage, MovieList, Movie} from '../../components/Main';
import MOVIES_QUERY from "../../querys";

function Home() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(' https://swapi-graphql.netlify.app/.netlify/functions/index', {
            method: "POST",
            headers: {},
            credentials: 'omit',
            body: JSON.stringify({query: MOVIES_QUERY})
        }).then(response => response.json())
        .then(data => console.log(data))
    }, []);

    return (
        <ContainerPage>
            <TitlePage > Seja bem-vindo </TitlePage>
            <MovieList>
                {movies.map((movies: any) => {
                    return (
                        <Movie key={movies.id}>
                            <Link to="/details"></Link>
                            <span>{movies.title}</span>
                        </Movie>
                )})}
            </MovieList>
        </ContainerPage>
    );
}

export default Home;