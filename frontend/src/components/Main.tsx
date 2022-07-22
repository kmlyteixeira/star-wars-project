import styled from 'styled-components';

export const ContainerPage = styled.div`
    padding: 5px 20px;
`;

export const TitlePage = styled.h1`
    font-size: 20px;
    text-align: center;
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
        width: 200px;
        border-radius: 16px;
        margin-bottom: 25px;
    }

    span {
        font-weight: bold;
        font-size: 100%;
    }

    a {
        transition: all 0.3s;
    }

    a:hover {
        transform: scale(1.1);
    }
`;