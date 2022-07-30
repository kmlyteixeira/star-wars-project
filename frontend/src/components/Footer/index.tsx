import React from "react";
import { AreaFooter } from './styled';

function Footer() { 

    return(
        <AreaFooter>
            <ul>
                <li>REACH ME ON:
                    <a href="https://github.com/kmlyteixeira"><img src="../../github.png"></img></a>
                    <a href="https://www.linkedin.com/in/kemily-teixeira/"><img src="../../linkedin.png"></img></a>
                </li>
                <li className="text-aux-foot">MAY THE FORCE BE WITH YOU</li>
            </ul>
        </AreaFooter>
    )
     
}

export default Footer;