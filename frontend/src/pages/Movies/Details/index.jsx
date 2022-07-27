import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ContainerPage, TitlePage } from "../../../components/Main"
import { MOVIES_QUERY } from "../../../querys";
import { DetailsList } from "./styled";

export default function Details() {

    const { data } = useQuery(MOVIES_QUERY)

    /**/
    var { id } = useParams();
    var index = Number(id);
    const detailsMovies = Object.values(data.allFilms.films);

    const moviesImage = [
        {
            image_URL: 'https://m.media-amazon.com/images/I/51c6S4kGFmL.jpg'
        },
        {
            image_URL: 'https://m.media-amazon.com/images/I/51nwJJf3IjL.jpg'
        },
        {
            image_URL: 'https://m.media-amazon.com/images/I/51FFvV73KLL.jpg'
        },
        {
            image_URL: 'https://upload.wikimedia.org/wikipedia/pt/3/30/Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg'
        },
        {
            image_URL: 'https://images-na.ssl-images-amazon.com/images/I/515poxBuvVL.jpg'
        },
        {
            image_URL: 'https://upload.wikimedia.org/wikipedia/pt/5/58/Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg'
        },
    ]

    const details = [
        {
            id: detailsMovies[index].id,
            title: detailsMovies[index].title,
            created: detailsMovies[index].created,
            director: detailsMovies[index].director,
            episodeID: detailsMovies[index].episodeID,
            openingCrawl: detailsMovies[index].openingCrawl,
            image: moviesImage[index].image_URL
        }
    ]
    /**/
    return (
        <ContainerPage>
            <DetailsList>
            {details.map((det) => {
                    return (
                        <>
                        <li><TitlePage>{det.title}</TitlePage></li>
                        <li>
                            <img src={det.image}></img>
                            <span className="openingStyled">{det.openingCrawl}</span>
                        </li>
                        </>
                    )
                })}
            </DetailsList>
        </ContainerPage>
        
    )
}