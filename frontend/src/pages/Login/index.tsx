import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Api from '../../Api';
import { AreaLogin } from './styled';

import { BtnDefaultIcons, BtnDefault } from '../../components/Styled';

import './login.css';

type Props = {
    onReceiveGoogle: any;
}

export default ({onReceiveGoogle}: Props) => {

const actionLoginGit = async () => {
    let result = await Api.googleLogar();

    if(result){
        onReceiveGoogle(result.user);
    } else {
        alert('Error');
    }
}

const Register = () => {
    return (
        <AreaLogin>
                <h1 className='return'>
                    <Link to="/"><img src="../../../arrowback.jpg" alt='arrowback'/></Link>
                       Crie sua conta
                </h1>

                <p>Crie sua conta, é grátis!</p>

                <form>
                    <div className="form--input">
                        <label>Nome</label>
                        <input type="text" />
                    </div>

                    <div className="form--input">
                        <label>E-mail</label>
                        <input type="email" />
                    </div>

                    <div className="form--input">
                        <label>Senha</label>
                        <input type="password" />
                    </div>

                    <BtnDefault>Comece Agora!</BtnDefault>
                
                    <div className="footerLogin">
                        Já tem uma conta?  
                        <Link to="/">Fazer Login</Link>
                    </div>
                </form>
            </AreaLogin>
    );
}

const Login = () => {
    return (
        <AreaLogin>
                <img className='loginImage' src='../../../yoda.gif' alt='yoda'></img>
                <h1>Faça seu Login</h1>
                <BtnDefaultIcons>
                    <img src="../../../facebook.png" alt='facebook'/>
                    <div className="center">Fazer login com o Facebook</div>
                </BtnDefaultIcons>

                <BtnDefaultIcons onClick={actionLoginGit}>
                    <img src="../../../google.png" alt='google'/>
                    <div className="center">Fazer login com o Google</div>
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
    );
}


    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Login />} />
                <Route path='/register' element = {<Register />} />
            </Routes>
        </BrowserRouter>
    );
}
