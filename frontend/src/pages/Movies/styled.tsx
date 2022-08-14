import styled from "styled-components";

export const DetailsList = styled.ul`
    color: white;

    li {
        list-style: none;
        display: flex;
        margin-rigth: 150px; 
            
        @media screen and (max-width: 1200px){
            display: list-item;

            img {
                display: grid;
            }
        }

        img {
            width: 25%;
            padding: 25px;
        }

        .titleStyled {
            color: white;
        }

    }

    .textAux {
        padding: 25px;
        color: white;
        text-align: left;
        margin-top: 25px;
        margin-left: 30px;
    }

    .buttonCollection {
        width: 200px;
        font-family: Franklin Gothic;
        background-color: #DBA90D;
        color: black;
        display: inline;

        &:hover{
            background-color: white;
        }
    }
`;

export const SpanMovie = styled.span `
    font-family: Franklin Gothic;
    color: white;
    font-size: 20px;
    padding: 25px;
`;

export const SpanOpening = styled.span `
    color: #DBA90D;
    font-family: Franklin Gothic;
    padding: 25px;
    font-size: 25px;
    text-align: center;
    margin-top: 80px;
    margin-right: 250px;

`;

export const DivVideo = styled.div `
    display: inline;
    padding: 25px;
`;

export const GifIcon = styled.img `
    width: 18px;
`;
