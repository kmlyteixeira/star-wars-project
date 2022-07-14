import styled from 'styled-components';

export const AreaLogin = styled.div`
    font-family:Arial, Helvetica, sans-serif;
    background-color: #DDDEDA;
    padding: 30px;
    max-width: 300px;
    margin: auto;
    margin-top: 20px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #CCC;

    h1 {
        font-size: 25px;
    }

    .return{
        display: flex;
        font-size: 25px;

        img {
            width: 15px; 
            margin-right: 20px;
        };
    };

    p {
        font-size: 12px;
        color: #808080;
    }

    .form--input {
        text-align: left;

        label {
            display: block;
        }

        input {
            margin-bottom: 20px;
            padding: 10px;
            font-size: 16px;
            outline: none;
            border: 1px solid #FFF;
            border-radius: 5px;
            width: 280px;
            transition: 0.3s;

            &:hover{
                border: 1px solid #ccc;
            }
        }
    }

    .footerLogin{
        font-size: 13px;

        a{
            font-weight: bold;
            margin-left: 5px;
            color: #9e0000;
            transition: 0.4s;
            cursor: pointer;
            
            &:hover{
                color: #4e0000;
            }
        }
    }
`;
