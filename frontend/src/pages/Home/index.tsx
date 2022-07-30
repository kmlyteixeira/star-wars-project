import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { ContainerPage, TitlePage, MovieList, Movie} from '../../components/Main';
import { ContainerHome } from "./styled";

function Home() {
    return (
        <ContainerPage>
            <TitlePage> 
                <h2 className="display-one">A long time ago<br /> 
                    in a 
                    <span className="text-aux"> Galaxy</span><br />
                    far, far away...
                </h2>
                <ContainerHome>
                    <li className="card-link">
                        <Link to="/details/:id/characters"><img src="../../../character.jpg" alt="character"></img></Link>
                        <span><b>CHARACTERS</b></span>
                    </li>
                    <li className="card-link">
                        <Link to="/movies"><img src="../../../films.jpg" alt="films"></img></Link>
                        <span><b>FILMS</b></span>
                    </li>
                </ContainerHome>
            </TitlePage>
        </ContainerPage>
    );
}

export default Home;