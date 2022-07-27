import { useQuery } from "@apollo/client";
import { ContainerPage, TitlePage } from "../../../../components/Main"
import { CHARACTERS_QUERY } from "../../../../querys";
import { Parent } from "./styled"

export default function Characters() {

    const { data } = useQuery(CHARACTERS_QUERY)
    console.log(data);

    return (
        <ContainerPage>
            <TitlePage>Characters</TitlePage>
            <Parent>
                {data.allPeople.people.map((char) => {
                    return (
                        <div className="card" key={char.id}>
                            <div className="container">
                                <h4>
                                    <b>{char.name}</b>
                                </h4>
                                <p>
                                    <b>GENDER:</b> {char.gender}<br />
                                    <b>EYE COLOR:</b> {char.eyeColor}<br />
                                    <b>HAIR COLOR:</b> {char.hairColor}<br />
                                    <b>BIRTH YEAR:</b> {char.birthYear}<br />
                                    <b>HEIGHT:</b> {char.height}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </Parent>
        </ContainerPage>

    )
}