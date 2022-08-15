import { useEffect, useRef, useState } from "react";
import { ContainerPage, TitlePage, ListStyle, LineStyle } from "../../../../components/Main";
import { Parent } from "./styled";
import Popup from "./Popup/Popup";
import { SpanMovie } from "../../styled";
import { useLazyQuery, useQuery } from "@apollo/client";
import { DETAILS_PEOPLE_QUERY } from "../../../../querys";
import { client } from "../../../../services/apollo";

export default function Characters() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        dataCharacters();
    }, [])

    const dataCharacters = async () => {
        const dataCharacters = await fetch("https://akabab.github.io/starwars-api/api/all.json");
        const dataConvert = await dataCharacters.json();
        setCharacters(dataConvert);
    }

    const [btnPopup, setBtnPopup] = useState(false);

    const ref = useRef(null);
    const [executeQuery, { data }] = useLazyQuery(DETAILS_PEOPLE_QUERY, { client: client });

    const handleClick = (event: any) => {
        setBtnPopup(!btnPopup);

        const idCharacter = event.target.id;
        executeQuery({ variables: { personId: idCharacter } });
    }

 //   console.log(data);

    return (
        <ContainerPage>
            <Parent>
                {characters.map((char: any) => {
                    return (
                        <>
                            <ListStyle className="card" >
                                <LineStyle>
                                    <img src={char.image}></img>
                                    <button id={char.id} onClick={handleClick}>TESTE</button>
                                    <div className="container">
                                        <h4>
                                            <b>{char.name}</b>
                                        </h4>
                                    </div>
                                </LineStyle>
                            </ListStyle>
                        </>
                    )
                })}
            </Parent>
            {Object.values(data).map((det: any) => {
                    return (
                        <Popup trigger={btnPopup} setTrigger={setBtnPopup}>
                            <SpanMovie>{det.name}</SpanMovie>
                            <ListStyle>
                                <LineStyle> BirthYear: {det.birthYear}</LineStyle>
                                <LineStyle> EyeColor: {det.eyeColor}</LineStyle>
                                <LineStyle> Gender: {det.gender}</LineStyle>
                                <LineStyle> HairColor: {det.hairColor}</LineStyle>
                            </ListStyle>
                        </Popup>
                    )
                })}
        </ContainerPage>

    )
}