import styled from 'styled-components';

export const BtnDefaultIcons = styled.button`

    display: flex;
    align-itens: center;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    border: 0px;
    outline: none;
    font-size: 16px;
    font-wight: bold;
    margin-bottom: 15px;
    transition: 0.4s;

    &:hover {
        background-color: #CCC;
    }

    .center{
        text-align: center;
        width:100%
    }

    img {
        width: 20px;   
    }
`;

export const BtnDefault = styled(BtnDefaultIcons)`
    background-color: #1a1c22;
    color: #fff;
    display: inline;

    &:hover{
        background-color: #020004;
    }

`;