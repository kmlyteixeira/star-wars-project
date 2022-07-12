import React from "react";
import { AreaHeader } from './styled';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <AreaHeader>
            <div className="container">
                <div className="menu">
                    <img src="../../../menu.png"></img>
                </div>
                <div className="logo">
                    <Link to="/"><img src="../../../logoprincipal.png"></img></Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/film">Filmes</Link></li>
                        <li><Link to="/actionfig">Action Figures</Link></li>
                        <li><Link to="/logout">Sair</Link></li>
                    </ul>
                </nav>
            </div>
        </AreaHeader>
    );
}

export default Header;