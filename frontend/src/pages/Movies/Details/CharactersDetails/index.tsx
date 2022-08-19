import { useEffect, useRef, useState } from "react";
import { ContainerPage, ListStyle, LineStyle } from "../../../../components/Main";
import { Parent, TitleCharacter, PopupCharacter, PopupImage, PopupText, PopupList, PopupListItem, ListDiv } from "./styled";
import Popup from "./Popup/Popup";
import { characters } from "./object";

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
                            <TitleCharacter>{detail.name}</TitleCharacter>
                            <PopupCharacter>
                                <PopupImage src={detail.image}></PopupImage>
                                <PopupText>{detail.resume}</PopupText>
                            </PopupCharacter>
                            <ListDiv>
                            <PopupList>
                                <PopupListItem>PLANETA DE ORIGEM: </PopupListItem>
                                <PopupListItem>ESPÉCIE (RAÇA): </PopupListItem>
                                <PopupListItem>FRASE MARCANTE: </PopupListItem>
                                <PopupListItem>ARMAS QUE UTILIZA: </PopupListItem>
                                <PopupListItem>PRINCIPAIS HABILIDADES: </PopupListItem>
                            </PopupList>
                            <PopupList>
                                <PopupListItem>{detail.planet}</PopupListItem>
                                <PopupListItem>{detail.specie}</PopupListItem>
                                <PopupListItem>{detail.memorablePhrase}</PopupListItem>
                                <PopupListItem>{detail.arms}</PopupListItem>
                                <PopupListItem>{detail.skill}</PopupListItem>
                            </PopupList>
                            </ListDiv>
                        </Popup>
                    )
                })}
        </ContainerPage>

    )
}


