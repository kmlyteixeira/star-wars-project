import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { ContainerPage, TitlePage, ListStyle, LineStyle} from '../../components/Main';


function Home() {
    return (
        <ContainerPage>
            <TitlePage> 
                <h2 className="display-one">A long time ago in a 
                    <span className="text-aux"> GALAXY</span> far, far away...
                </h2>
                <ListStyle>
                    <LineStyle className="card-link">
                        <Link to="/characters"><img src="../../../character.jpg" alt="character"></img></Link>
                        <span><b>CHARACTERS</b></span>
                    </LineStyle>
                    <LineStyle className="card-link">
                        <Link to="/movies"><img src="../../../films.jpg" alt="films"></img></Link>
                        <span><b>FILMS</b></span>
                    </LineStyle>
                    <LineStyle className="card-link">
                        <Link to="/vehicles"><img src="../../../vehicles.jpg" alt="vehicles"></img></Link>
                        <span><b>VEHICLES</b></span>
                    </LineStyle>
                    <LineStyle className="card-link">
                        <Link to="/planets"><img src="../../../planets.jpg" alt="planets"></img></Link>
                        <span><b>PLANETS</b></span>
                    </LineStyle>
                </ListStyle>
            </TitlePage>
        </ContainerPage>
    );
}

export default Home;