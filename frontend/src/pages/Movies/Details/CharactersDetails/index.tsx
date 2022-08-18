import { useEffect, useRef, useState } from "react";
import { ContainerPage, ListStyle, LineStyle, TitlePage } from "../../../../components/Main";
import { Parent, PopupDiv } from "./styled";
import Popup from "./Popup/Popup";
import { characters } from "./object";
import Details from "..";

export default function Characters() {

    const [btnPopup, setBtnPopup] = useState(false);

    const ref = useRef(null);

    const handleClick = (event: any) => {
        setBtnPopup(!btnPopup);
        const index = event.target.id;
    }

    const details = [
        {
            id: characters[1].id,
            name: characters[1].name,
            resume: characters[1].resume,
            planet: characters[1].planet,
            specie: characters[1].specie,
            memorablePhrase: characters[1].memorablePhrase,
            icon: characters[1].icon,
            image: characters[1].image,
            arms: characters[1].arms,
            skill: characters[1].skill,
        }
    ]

    return (
        <ContainerPage>
            <Parent>
                {characters.map((char: any) => {
                    return (
                        <ListStyle className="card-link" >
                            <LineStyle>
                                <img id={char.id} src={char.image} onClick={handleClick} alt="character"></img>
                                <span>{char.name}</span>
                            </LineStyle>
                        </ListStyle>
                    )
                })}
            </Parent>
                {details.map((detail: any) => {
                    return(
                        <Popup trigger={btnPopup} setTrigger={setBtnPopup}>
                            <img src={detail.image}></img>
                            <TitlePage>{detail.name}</TitlePage>
                            <p>{detail.resume}</p>
                        </Popup>
                    )
                })}
        </ContainerPage>

    )
}


