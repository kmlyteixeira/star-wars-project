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
            padding: 25px;
        }

        .openingStyled {
            color: #DBA90D;
            font-family: Franklin Gothic;
            padding: 25px;
            font-size: 25px;
            text-align: center;
            margin-top: 80px;
            margin-right: 250px;
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
        margin-left: 85px;
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
`;
