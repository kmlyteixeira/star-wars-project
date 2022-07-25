import React from "react";
import { Link } from "react-router-dom";

import { ContainerPage, Movie, MovieList, TitlePage } from '../../components/Main';

const Page = () => {

    const movies = [
        {
            id: "ZmlsbXM6MQ==",
            title: "A New Hope",
            image_URL: 'https://m.media-amazon.com/images/I/51c6S4kGFmL.jpg'
        },
        {
            id: "ZmlsbXM6Mg==",
            title: "The Empire Strikes Back",
            image_URL: 'https://m.media-amazon.com/images/I/51nwJJf3IjL.jpg'
        },
        {
            id: "ZmlsbXM6Mw==",
            title: "Return of the Jedi",
            image_URL: 'https://m.media-amazon.com/images/I/51FFvV73KLL.jpg'
        },
        {
            id: "ZmlsbXM6NA==",
            title: "The Phantom Menace",
            image_URL: 'https://upload.wikimedia.org/wikipedia/pt/3/30/Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg'
        },
        {
            id: "ZmlsbXM6NQ==",
            title: "Attack of the Clones",
            image_URL: 'https://images-na.ssl-images-amazon.com/images/I/515poxBuvVL.jpg'
        },
        {
            id: "ZmlsbXM6Ng==",
            title: "Revenge of the Sith",
            image_URL: 'https://upload.wikimedia.org/wikipedia/pt/5/58/Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg'
        },
    ]

    return (
        <ContainerPage>
            <TitlePage > Filmes </TitlePage>
            <MovieList>
                {movies.map(mov => {
                    return (
                        <Movie key={mov.id}>
                        <Link to={`/details/${mov.id}`}>
                            <img src={mov.image_URL}></img>
                        </Link>
                        <span>{mov.title}</span>
                        </Movie>
                        )
                    })}
            </MovieList>
        </ContainerPage>
    );
}

export default Page;