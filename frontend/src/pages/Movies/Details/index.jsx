import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ContainerPage, TitlePage } from "../../../components/Main"
import { BtnDefault } from "../../../components/Styled";
import { MOVIES_QUERY } from "../../../querys";
import { DetailsList, DivVideo, SpanMovie, SpanOpening, VideoButton, VideoContainer, VideoControls } from "../styled";
import { Link } from "react-router-dom";
import { client } from "../../../services/apollo.ts";
import { useState, useRef } from "react";

function useVideoState($videoPlayer) {
    const [playerState, setPlayerState] = useState({
        playing: false,
    })

    function toggleVideoPlay() {
        console.log($videoPlayer);
        setPlayerState({
            playing: !playerState.playing
        })
    }

    return {
        playerState,
        toggleVideoPlay
    }
}


export default function Details() {

    const { data } = useQuery(MOVIES_QUERY, {client: client})

    var { id } = useParams();
    var index = Number(id);
    const detailsMovies = Object.values(data.allFilms.films);

    const $videoPlayer = useRef(null);
    const { playerState, toggleVideoPlay } = useVideoState($videoPlayer);

    const moviesImage = [
        {
            image_URL: 'https://m.media-amazon.com/images/I/51c6S4kGFmL.jpg',
            videoURL: 'https://youtu.be/_lOT2p_FCvA',
            thumbnail: 'https://i.ytimg.com/vi/_lOT2p_FCvA/sddefault.jpg'
        },
        {
            image_URL: 'https://m.media-amazon.com/images/I/51nwJJf3IjL.jpg',
            videoURL: 'https://youtu.be/_lOT2p_FCvA',
            thumbnail: 'https://i.ytimg.com/vi/_lOT2p_FCvA/sddefault.jpg'
        },
        {
            image_URL: 'https://m.media-amazon.com/images/I/51FFvV73KLL.jpg',
            videoURL: 'https://youtu.be/_lOT2p_FCvA',
            thumbnail: 'https://i.ytimg.com/vi/_lOT2p_FCvA/sddefault.jpg'
        },
        {
            image_URL: 'https://upload.wikimedia.org/wikipedia/pt/3/30/Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg',
            videoURL: 'https://youtu.be/_lOT2p_FCvA',
            thumbnail: 'https://i.ytimg.com/vi/_lOT2p_FCvA/sddefault.jpg'
        },
        {
            image_URL: 'https://images-na.ssl-images-amazon.com/images/I/515poxBuvVL.jpg',
            videoURL: 'https://youtu.be/_lOT2p_FCvA',
            thumbnail: 'https://i.ytimg.com/vi/_lOT2p_FCvA/sddefault.jpg'
        },
        {
            image_URL: 'https://upload.wikimedia.org/wikipedia/pt/5/58/Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg',
            videoURL: 'https://youtu.be/_lOT2p_FCvA',
            thumbnail: 'https://i.ytimg.com/vi/_lOT2p_FCvA/sddefault.jpg'
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
            thumbnail: moviesImage[index].thumbnail
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
                                </SpanOpening>
                            </li>
<<<<<<< HEAD
                            <DivVideo>
                                <VideoContainer ref={$videoPlayer} src={det.video} poster={det.thumbnail}></VideoContainer>
                                <VideoControls>
                                    <VideoButton onClick={toggleVideoPlay}>
                                        { playerState.playing ? 'Pause' : 'Play' }
                                    </VideoButton>
                                </VideoControls>
                            </DivVideo>
                            <Link to={`/addcollection/${det.id}`}><BtnDefault className="buttonCollection">Add to my Collection</BtnDefault></Link>                        
=======
                            <Link to={`/details/${det.id}/addcollection`}><BtnDefault className="buttonCollection">Add to my Collection</BtnDefault></Link>
>>>>>>> 152c3711577408a6a644b3d9125c2b93c643207b
                        </>
                    )
                })}
            </DetailsList>
        </ContainerPage>
    )
}