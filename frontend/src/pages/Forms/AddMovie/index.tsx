import { useMutation, useQuery } from "@apollo/client";
import React, { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { ContainerPage, ImageIcon, TitlePage } from "../../../components/Main";
import { BtnDefault } from "../../../components/Styled";
import { ADD_MOVIE_MUTATION, MOVIES_QUERY, MOVIE_DETAILS } from "../../../querys";
import { client } from "../../../services/apollo";
import { FormStyled, InputStyled } from "../styled";

const Page = () => {

    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");
    const [acquired, setAcquired] = useState("");
    const [value, setValue] = useState("");

    const [AddMovie] = useMutation(ADD_MOVIE_MUTATION);

    async function handleAddMovie(event: FormEvent) {
        event.preventDefault();

        if (!title) return;

        await AddMovie({
            variables: {
                title,
                comment,
                acquired,
                value
            },
            /*refetchQueries: [{ query: GET_MOVIES_QUERY }]*/
        })
    }

    const { id } = useParams();
    console.log(id);
    
    const { data } = useQuery(MOVIE_DETAILS, { variables: id, client: client})
    console.log(data);

    return (
        <ContainerPage>
            <TitlePage>YOU PATH YOU MUST DECIDE <ImageIcon src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/63d9d7961d3aded.png"></ImageIcon></TitlePage>
            <FormStyled onSubmit={handleAddMovie}>
                <InputStyled type="text" value={title} onChange={e => setTitle(e.target.value)} />
                <InputStyled type="text" value={comment} onChange={e => setComment(e.target.value)} />
                <InputStyled type="text" value={acquired} onChange={e => setAcquired(e.target.value)} />
                <InputStyled type="text" value={value} onChange={e => setValue(e.target.value)} />
                <BtnDefault>Enviar</BtnDefault>
            </FormStyled>
        </ContainerPage>
    )
}

export default Page;