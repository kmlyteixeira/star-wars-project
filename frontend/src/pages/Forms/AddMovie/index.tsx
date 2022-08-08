import { useMutation } from "@apollo/client";
import React, { FormEvent, useState } from "react";
import { ContainerPage } from "../../../components/Main";
import { BtnDefault } from "../../../components/Styled";
import { ADD_MOVIE_MUTATION } from "../../../querys";
import { FormStyled, InputStyled } from "../styled";

const Page = () => {

    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");
    const [acquired, setAcquired] = useState("");
    const [value, setValue] = useState("");

    const [AddMovie, { data }] = useMutation(ADD_MOVIE_MUTATION);
    console.log(data);

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

    return (
        <ContainerPage>
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