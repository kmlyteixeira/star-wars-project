import styled from 'styled-components';

export const ContainerPage = styled.div`
    padding: 3px 20px;
`;

export const TitlePage = styled.h1`
    font-size: 20px;
    text-align: left;
    color: white;

    .display-one {
        padding: 80px;
        font-size: 50px;
        font-family: Courier New, monospace;
        font-style: normal;
    }

    .text-aux {
        color: #DBA90D;
    }

`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 20px;
    row-gap: 15px;
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 100%;
        border-radius: 16px;
        margin-bottom: 10px;
    }

    span {
        font-weight: bold;
        font-size: 13px;
        margin-bottom: 15px;
        color: white;
    }

    a {
        transition: all 0.3s;
    }

    a:hover {
        transform: scale(1.1);
    }
`;