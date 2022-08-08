import React from "react";
import { Link } from "react-router-dom";

import { ContainerPage, ListStyle, LineStyle, TitlePage } from '../../components/Main';
import { SpanMovie } from "./styled";

const Page = () => {

    const movies = [
        {
            id: 0,
            idAPI: "ZmlsbXM6MQ==",
            title: "A New Hope",
            image_URL: 'https://m.media-amazon.com/images/I/51c6S4kGFmL.jpg'
        },
        {
            id: 1,
            idAPI: "ZmlsbXM6Mg==",
            title: "The Empire Strikes Back",
            image_URL: 'https://m.media-amazon.com/images/I/51nwJJf3IjL.jpg'
        },
        {
            id: 2,
            idAPI: "ZmlsbXM6Mw==",
            title: "Return of the Jedi",
            image_URL: 'https://m.media-amazon.com/images/I/51FFvV73KLL.jpg'
        },
        {
            id: 3,
            idAPI: "ZmlsbXM6NA==",
            title: "The Phantom Menace",
            image_URL: 'https://upload.wikimedia.org/wikipedia/pt/3/30/Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg'
        },
        {
            id: 4,
            idAPI: "ZmlsbXM6NQ==",
            title: "Attack of the Clones",
            image_URL: 'https://images-na.ssl-images-amazon.com/images/I/515poxBuvVL.jpg'
        },
        {
            id: 5,
            idAPI: "ZmlsbXM6Ng==",
            title: "Revenge of the Sith",
            image_URL: 'https://upload.wikimedia.org/wikipedia/pt/5/58/Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg'
        },
    ]

    return (
        <ContainerPage>
            <ListStyle>
                {movies.map(mov => {
                    return (
                        <LineStyle key={mov.id}>
                        <Link to={`/details/${mov.id}`}>
                            <img src={mov.image_URL}></img>
                        </Link>
                        <SpanMovie>{mov.title}</SpanMovie>
                        </LineStyle>
                        )
                    })}
            </ListStyle>
            <p><br></br></p>
        </ContainerPage>
    );
}

export default Page;