import { useEffect, useState } from "react";
import { ContainerPage, TitlePage, ListStyle, LineStyle } from "../../../../components/Main";
import { Parent } from "./styled";
import Popup from "./Popup/Popup";

export default function Characters() {

    /*const { data } = useQuery(CHARACTERS_QUERY)
    console.log(data);*/

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        data();
    }, [])

    const data = async () => {
        const dataCharacters = await fetch("https://akabab.github.io/starwars-api/api/all.json");
        const dataConvert = await dataCharacters.json();
        setCharacters(dataConvert);
    }
    console.log(characters);

    const [btnPopup, setBtnPopup] = useState(false);

    var handleClick = () => {
        setBtnPopup(!btnPopup);
    }

    useEffect(() => {
        if (btnPopup == true) {
            /*Consumir a API*/
        }
    }, [btnPopup])

    return (
        <ContainerPage>
            <Parent>
                {characters.map((char: any) => {
                    return (
                        <>
                            <ListStyle onClick={handleClick} className="card" key={char.id}>
                                <LineStyle>
                                    <img src={char.image}></img>
                                    <div className="container">
                                        <h4>
                                            <b>{char.name}</b>
                                        </h4>
                                    </div>
                                </LineStyle>
                            </ListStyle>
                            <Popup trigger={btnPopup} setTrigger={setBtnPopup}>
                                <div>
                                    <img src={char.image}></img>
                                </div>
                            </Popup>
                        </>
                    )
                })}

            </Parent>
        </ContainerPage>

    )
}