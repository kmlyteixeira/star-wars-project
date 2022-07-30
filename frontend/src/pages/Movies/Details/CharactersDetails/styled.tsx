import styled from "styled-components";

export const Parent = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .card {
        margin: 1%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 16px;
        transition: 0.3s;
        width: 20%;
        background-color: white;

        h4 {
            color: black;
        }

        img {
            width: 100%; 
            height: 300px; 
            object-fit: cover;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
        }
        
    }

    .container {
        padding: 2px 16px;
        text-align: center;
    }

`;

export const PopupDiv = styled.div`
    position: fixed;
    color: white;
    top: 10%;
    left: 10%;
    width: 100%
    height: 100vh;
    background-color: black;

    display: flex;
    justify-content: center;
    align-items: center;

    .popup-inner {
        position: relative;
        padding: 32px;
        width: 100%;
        max-width: 640px;
        backgroud-color: white;
    }

    .popup-inner .close-btn {
        width:15px;
        position: absolute;
        top: 16px;
        right: 16px;
    }
`;