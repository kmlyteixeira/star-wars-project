import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { ContainerPage, TitlePage, MovieList, Movie} from '../../components/Main';
import { ContainerHome } from "./styled";

function Home() {
    return (
        <ContainerPage>
            <ContainerHome>
                <img src="../../../wallpaper.jpg" alt="wallpaper"></img>
            </ContainerHome>
            <TitlePage> 
                <h2 className="display-one">A long time ago<br /> 
                    in a 
                    <span className="text-aux"> Galaxy</span><br />
                    far, far away...
                </h2>
                </TitlePage>
        </ContainerPage>
    );
}

export default Home;