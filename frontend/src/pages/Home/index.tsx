import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { ContainerPage, TitlePage, MovieList, Movie} from '../../components/Main';

function Home() {
    return (
        <ContainerPage>
            <TitlePage> Seja bem-vindo </TitlePage>
        </ContainerPage>
    );
}

export default Home;