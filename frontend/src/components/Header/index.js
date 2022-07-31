import { AreaHeader } from './styled';
import { Link } from 'react-router-dom';

function Header(props){
    return (
        <AreaHeader>
            <div className="container">
                <div className="logo">
                    <Link to="/"><img src="../../../logoprincipal.png"></img></Link>
                </div>
                <nav>
                    <div className="avatar">
                        <label>{props.user.name}</label>
                    </div>
                </nav>
            </div>
        </AreaHeader>
    );
}

export default Header;

