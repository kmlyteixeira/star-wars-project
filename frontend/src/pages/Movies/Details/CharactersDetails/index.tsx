import { useEffect, useRef, useState } from "react";
import { ContainerPage, ListStyle, LineStyle, TitlePage, PathPage } from "../../../../components/Main";
import { Parent, TitleCharacter, PopupCharacter, PopupImage, PopupText, PopupList, PopupListItem, ListDiv, PopupListInfo } from "./styled";
import Popup from "./Popup/Popup";
import { characters } from "./object";
import { Link } from "react-router-dom";

export default function Characters() {

    const [btnPopup, setBtnPopup] = useState(false);
    const [index, setIndex] = useState(0);

    const ref = useRef(null);
 
    const handleClick = (event: any) => {
        setBtnPopup(!btnPopup);
        setIndex(event.target.id);
    }

    const details = [{
        id: characters[index].id,
        name: characters[index].name,
        resume: characters[index].resume,
        planet: characters[index].planet,
        specie: characters[index].specie,
        memorablePhrase: characters[index].memorablePhrase,
        icon: characters[index].icon,
        image: characters[index].image,
        arms: characters[index].arms,
        skill: characters[index].skill,
    }]

    return (
        <ContainerPage>
            <PathPage><Link to={"/"}>Home</Link> / Characters </PathPage>
            <TitlePage>
                <h2 className="display-one"> I'm one with the Force. <span className="text-aux"> The Force is with me. </span></h2>
            </TitlePage>
            <Parent>
                {characters.map((char: any) => {
                    return (
                        <ListStyle className="card-link" >
                            <LineStyle>
                                <img id={char.id} src={char.image} onClick={handleClick} alt="character" className="characterIcon"></img>
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
                                <PopupListItem>ARMAS QUE UTILIZA: </PopupListItem>
                                <PopupListItem>PRINCIPAIS HABILIDADES: </PopupListItem>
                            </PopupList>
                            <PopupList>
                                <PopupListInfo>{detail.planet}</PopupListInfo>
                                <PopupListInfo>{detail.specie}</PopupListInfo>
                                <PopupListInfo>{detail.arms}</PopupListInfo>
                                <PopupListInfo>{detail.skill}</PopupListInfo>
                            </PopupList>
                            </ListDiv>
                            <PopupText>FRASE MARCANTE: <br></br><br></br> "{detail.memorablePhrase}"</PopupText>
                        </Popup>
                    )
                })}
        </ContainerPage>

    )
}


