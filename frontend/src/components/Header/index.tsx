import React, { useState } from "react";
import { AreaHeader } from './styled';
import { Link } from 'react-router-dom';

function Header(props: { user: { avatar: any; name: string; }; }){
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
                        <li><Link to="/movies">Filmes</Link></li>
                        <li><Link to="/actionfig">Action Figures</Link></li>
                        <li><Link to="/">Sair</Link></li>
                    </ul>

                    <div className="avatar">
                        <img src ={props.user.avatar} />
                        <label>{props.user.name}</label>
                    </div>
                </nav>
            </div>
        </AreaHeader>
    );
}

export default Header;

