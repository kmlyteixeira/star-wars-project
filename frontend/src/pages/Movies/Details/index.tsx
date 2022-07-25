import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ContainerPage, TitlePage } from "../../../components/Main"

export default function Details() {

    const { id } = useParams();

    return (
        <ContainerPage>
            <TitlePage>Detalhes</TitlePage>
        </ContainerPage>
        
    )
}