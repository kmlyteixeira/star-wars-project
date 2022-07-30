import { useEffect, useState } from "react";
import { ContainerPage, TitlePage } from "../../../../components/Main";
import { Parent } from "./styled";
import Popup from "./Popup/Popup";

export default function Characters() {

    /*const { data } = useQuery(CHARACTERS_QUERY)
    console.log(data);*/

    const [btnPopup, setBtnPopup] = useState(false);

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

    return (
        <ContainerPage>
            <Parent>
                {characters.map((char) => {
                    return (
                        <div onClick={() => setBtnPopup(true)} className="card" key={char.id}>
                            <img src={char.image}></img>
                            <div className="container">
                                <h4>
                                    <b>{char.name}</b>
                                </h4>
                            </div>
                        </div>
                    )
                })}
            </Parent>
            <Popup trigger={btnPopup} setTrigger={setBtnPopup}>
                <img src="../../../../saber.gif"></img>
            </Popup>
        </ContainerPage>

    )
}