import { useMutation, useQuery } from "@apollo/client";
<<<<<<< HEAD
import React, { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gql } from "urql";
import { ContainerPage } from "../../../components/Main";
import { BtnDefault } from "../../../components/Styled";
import { ADD_MOVIE_MUTATION, DETAILS_MOVIE_QUERY} from "../../../querys";
import { client } from "../../../services/apollo";
import { SpanMovie } from "../../Movies/styled";
=======
import React, { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { ContainerPage, ImageIcon, TitlePage } from "../../../components/Main";
import { BtnDefault } from "../../../components/Styled";
import { ADD_MOVIE_MUTATION, MOVIES_QUERY, MOVIE_DETAILS } from "../../../querys";
import { client } from "../../../services/apollo";
>>>>>>> 152c3711577408a6a644b3d9125c2b93c643207b
import { FormStyled, InputStyled } from "../styled";

const Page = () => {

    const { id } = useParams();
    const { data } = useQuery(DETAILS_MOVIE_QUERY, {client: client, variables: {filmId: id}});

    const [title, setTitle] = useState(data?.film?.title);
    const [comment, setComment] = useState("");
    const [acquired, setAcquired] = useState("");
    const [value, setValue] = useState("");

    const [AddMovie] = useMutation(ADD_MOVIE_MUTATION);
<<<<<<< HEAD

   /* useEffect(() => {
        setTitle(data?.film?.title);
    }, [title]);*/
=======
>>>>>>> 152c3711577408a6a644b3d9125c2b93c643207b

    async function handleAddMovie(event: FormEvent) {
        event.preventDefault();

        if (!title)
            return;

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
<<<<<<< HEAD
            <SpanMovie>{title}</SpanMovie>
=======
            <TitlePage>YOU PATH YOU MUST DECIDE <ImageIcon src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/63d9d7961d3aded.png"></ImageIcon></TitlePage>
>>>>>>> 152c3711577408a6a644b3d9125c2b93c643207b
            <FormStyled onSubmit={handleAddMovie}>
                <InputStyled type="text" value={comment} onChange={e => setComment(e.target.value)} />
                <InputStyled type="text" value={acquired} onChange={e => setAcquired(e.target.value)} />
                <InputStyled type="text" value={value} onChange={e => setValue(e.target.value)} />
                <BtnDefault>Enviar</BtnDefault>
            </FormStyled>
        </ContainerPage>
    )
}

export default Page;