import styled from "styled-components";

export const DetailsList = styled.ul`
    color: white;
    display: flex;
    background-color: black;

    .textAux {
        padding: 25px;
        color: white;
        text-align: left;
        margin-top: 25px;
        margin-left: 30px;
    }
`;

export const DetailsListAux = styled.ul`
    color: white;
    display: list-item;
    background-color: black;

    a {
        text-decoration: none;
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

export const ListVideo = styled.ul `
    justify-content: center;
`;

export const GifIcon = styled.img `
    width: 18px;
`;

export const DetailsLine = styled.li `
    list-style: none;
    display: flex;
    text-align: center;
    justify-content: center;
    margin-left: 50px;
    margin-right: 50px;
    padding: 25px;
    font-family: Franklin Gothic;
    font-size: 20px;
    color: white;

    @media (max-width: 1200px) {
        padding: 20px;
        display: list-item;
    }

`;

export const DetailsLineAux = styled.li `
    list-style: none;
    display: flex;
    text-align: center;
    justify-content: center;
    margin-left: 50px;
    margin-right: 50px;
    padding: 25px;
    font-family: Franklin Gothic;
    font-size: 20px;
    color: white;
    background-image: linear-gradient(to top, #020004, #4E0000);
    border-radius: 10px;

    @media (max-width: 1200px) {
        padding: 20px;
        display: list-item;
    }

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    button {
        display:block;
        height: 75px;
        width: 75px;
        margin-left: 3px;
        border-radius: 50%;
        border: 3px solid white;
        font-size: 30px;
        color: gray;
        background-color: #BCBCBC;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;

export const DetailsLineImg = styled.img `
    width: 250px;
    padding: 25px;
`;

export const LineVideo = styled.li `
    list-style: none;
    display: flex;
    text-align: center;
    justify-content: center;
    font-family: Franklin Gothic;
    font-size: 20px;
    color: white;

    @media (max-width: 1200px) {
        padding: 20px;
        margin-top: 150px;
        display: list-item;
    }

    img {
        width: 20px;
    }
`;


