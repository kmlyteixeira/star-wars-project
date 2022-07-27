import styled, { StyledComponent } from "styled-components";

export const DetailsList = styled.ul`
    color: white;

    li {
        list-style: none;
        display: flex;
        margin-left: 300px;
    
        @media screen and (max-width: 1000px){
            img {
                display: none;
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

    }

    .textAux {
        padding: 25px;
        color: white;
        text-align: left;
        margin-top: 25px;
        margin-left: 30px;
    }
`;