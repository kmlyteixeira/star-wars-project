import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ContainerPage, TitlePage, PathPage } from "../../../components/Main"
import { MOVIES_QUERY } from "../../../querys";
import { DetailsList, DetailsListAux, ListVideo, LineVideo, DetailsLine, DetailsLineAux, DetailsLineImg} from "../styled";
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
            {details.map((det) => {
                return (
                    <>
                        <PathPage><Link to={"/"}>Home</Link> / <Link to={"/"}>Movies</Link> / {det.title}</PathPage>
                        <TitlePage>
                            <h2 className="display-one">{det.title}: <span className="text-aux">Episode {det.episodeID}</span></h2>
                        </TitlePage>
                            <DetailsList>
                                <DetailsLineImg src={det.image}></DetailsLineImg>
                                <DetailsListAux>
                                    <DetailsLine>{det.openingCrawl}</DetailsLine>
                                    <DetailsLine>Director: {det.director}</DetailsLine>
                                    <DetailsList>
                                        <DetailsLineAux>
                                            <img src="../../../images/deathstar.png"></img>
                                            <Link to="/vehicles"><button>...</button></Link>
                                        </DetailsLineAux>
                                        <DetailsLineAux>
                                            <img src="../../../images/yoda.png"></img>
                                            <img src="../../../images/luke.png"></img>
                                            <Link to="/characters"><button>...</button></Link>
                                        </DetailsLineAux>
                                        <DetailsLineAux>
                                            <img src="../../../images/ald.jpg"></img>
                                            <Link to="/planets"><button>...</button></Link>
                                        </DetailsLineAux>
                                    </DetailsList>
                                </DetailsListAux>
                            </DetailsList>
                        <ListVideo>
                            <LineVideo>MEMORABLE SCENES <img src="../../../saber.gif"></img></LineVideo>
                            <LineVideo><ReactPlayer url={det.video} playing={false} /></LineVideo>
                        </ListVideo>
                    </>
                )
            })}
        </ContainerPage>
    )
}