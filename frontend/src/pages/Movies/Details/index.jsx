import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ContainerPage } from "../../../components/Main"
import { BtnDefault } from "../../../components/Styled";
import { MOVIES_QUERY } from "../../../querys";
import { DetailsList, SpanMovie, SpanOpening, DivVideo, GifIcon} from "../styled";
import { Link } from "react-router-dom";
import { client } from "../../../services/apollo.ts";
import ReactPlayer from "react-player";

export default function Details() {

    const { data } = useQuery(MOVIES_QUERY, {client: client})

    var { id } = useParams();
    var index = Number(id);
    const detailsMovies = Object.values(data.allFilms.films);

    const moviesImage = [
        {
            image_URL: 'https://m.media-amazon.com/images/I/51c6S4kGFmL.jpg',
            videoURL: 'https://youtu.be/2TCNoKvgtxo'
        },
        {
            image_URL: 'https://m.media-amazon.com/images/I/51nwJJf3IjL.jpg',
            videoURL: 'https://youtu.be/_lOT2p_FCvA'
        },
        {
            image_URL: 'https://m.media-amazon.com/images/I/51FFvV73KLL.jpg',
            videoURL: 'https://youtu.be/IMzg2X18rm0'
        },
        {
            image_URL: 'https://upload.wikimedia.org/wikipedia/pt/3/30/Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg',
            videoURL: 'https://youtu.be/gfMoXBOjWBM'
        },
        {
            image_URL: 'https://images-na.ssl-images-amazon.com/images/I/515poxBuvVL.jpg',
            videoURL: 'https://youtu.be/7ZnL4mcU5dg'
        },
        {
            image_URL: 'https://upload.wikimedia.org/wikipedia/pt/5/58/Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg',
            videoURL: 'https://youtu.be/8631ukAVr6g'
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
            image: moviesImage[index].image_URL,
            video: moviesImage[index].videoURL,
        }
    ]

    return (
        <ContainerPage>
            <DetailsList>
                {details.map((det) => {
                    return (
                        <>
                            <li>
                                <img src={det.image}></img>
                                <SpanOpening>
                                    <SpanMovie>{det.title}</SpanMovie><br /><br />
                                    {det.openingCrawl}<br /><br />
                                    <SpanMovie>Director: {det.director}</SpanMovie><br /><br />
                                    <Link to={`/addcollection/${det.id}`}><BtnDefault className="buttonCollection">Add to my Collection</BtnDefault></Link>
                                </SpanOpening>
                            </li>
                            <DivVideo>
                                <SpanMovie>MEMORABLE SCENES</SpanMovie><GifIcon src="../../../saber.gif"></GifIcon>
                                <ReactPlayer url={det.video}></ReactPlayer>
                            </DivVideo>
                        </>
                    )
                })}
            </DetailsList>
        </ContainerPage>
    )
}