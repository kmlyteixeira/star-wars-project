import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { AreaLogin } from './styled';

import { BtnDefaultIcons, BtnDefault } from '../../components/Styled';

import './login.css';

export default () => {
    return(
        <BrowserRouter>
            <AreaLogin>
                <h1>Faça login em sua conta</h1>
                <BtnDefaultIcons>
                    <img src="../../../facebook.png" />
                    <div className="center">Fazer login com o Facebook</div>
                </BtnDefaultIcons>

                <BtnDefaultIcons>
                    <img src="../../../github.png" />
                    <div className="center">Fazer login com o GitHub</div>
                </BtnDefaultIcons>

                <p>ou</p>

                <form>
                    <div className="form--input">
                        <label>E-mail</label>
                        <input type="email" />
                    </div>

                    <div className="form--input">
                        <label>Senha</label>
                        <input type="password" />
                    </div>

                    <BtnDefault>Entrar</BtnDefault>
                
                    <div className="footerLogin">
                        Não tem uma conta?  
                        <Link to="/register">Registre-se</Link>
                    </div>
                </form>
            </AreaLogin>
        </BrowserRouter>
        
    );
}