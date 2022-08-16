import styled from 'styled-components';

export const ContainerPage = styled.div`
    padding: 3px 20px;
`;

export const TitlePage = styled.h1`
    font-size: 15px;
    text-align: left;
    color: white;
    

    @media screen and (max-width: 1200px){
        display: list-item;
        
    }

    .display-one {
        margin-left: 15%;
        font-size: 35px;
        font-family: Courier New, monospace;
        font-style: normal;
    }

    .text-aux {
        color: #DBA90D;
    }

`;

export const ListStyle = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 20px;
    row-gap: 15px;
`;

export const LineStyle = styled.li`
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
        font-size: 20px;
        margin-bottom: 15px;
        color: white;
        font-family: Franklin Gothic;
    }

    a {
        transition: all 0.3s;
    }

    a:hover {
        transform: scale(1.1);
    }

    .card-link {
        width: 500px; 
        height: 200px; 
        object-fit: cover;

        span {
            position: absolute;
            font-size: 25px;
            font-family: Courier New, monospace;
            left: 180px;
            top: 160px;
            color: white;
            background-color: rgba(0,0,0,.4);
        }
    }
`;