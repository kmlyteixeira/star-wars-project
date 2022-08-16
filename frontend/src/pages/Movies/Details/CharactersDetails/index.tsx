import { useEffect, useRef, useState } from "react";
import { ContainerPage, TitlePage, ListStyle, LineStyle } from "../../../../components/Main";
import { Parent } from "./styled";
import Popup from "./Popup/Popup";
import { characters } from "./object";

export default function Characters() {

    const [btnPopup, setBtnPopup] = useState(false);

    const ref = useRef(null);

    const handleClick = (event: any) => {
        setBtnPopup(!btnPopup);

        const id = event.target.id;
    }

    return (
        <ContainerPage>
            <Parent>
                {characters.map((char: any) => {
                    return (
                        <ListStyle className="card-link" >
                            <LineStyle>
                                <img src={char.image} onClick={handleClick}></img>
                                <span>{char.name}</span>
                            </LineStyle>
                        </ListStyle>
                    )
                })}
                <Popup trigger={btnPopup} setTrigger={setBtnPopup}>
                    POPUP
                </Popup>
            </Parent>
        </ContainerPage>

    )
}