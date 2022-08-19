import styled from "styled-components";

export const Parent = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .card {
        margin: 1%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius: 16px;
        transition: 0.3s;
        width: 20%;
        background-color: black;

        h4 {
            color: white;
        }

        img {
            width: 100%;
            height: 300px; 
            object-fit: cover;
            object-position: 100% 0%;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            image-position: top center;
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
    left: 25%;
    width: 50%;
    height: 80%;
    background-color: #4E0000;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    display: column;
    justify-content: center;
    align-items: center;

    .popup-inner {
        position: relative;
        padding: 32px;
        width: 100%;
        max-width: 93%;
        backgroud-color: white;
    }

    .popup-inner .close-btn {
        width:15px;
        position: absolute;
        top: 16px;
        right: 16px;
    }
`;

export const TitleCharacter = styled.h1`
    font-size: 30px;
    text-align: center;
    color: white;
    margin-top: 0;
`;

export const PopupCharacter = styled.div`
    display: flex;

    @media (max-width: 1500px) {
        align-items: center;
        flex-direction: column;
    }
`;

export const PopupImage = styled.img`
    width: 250px;
`;

export const PopupText = styled.p`
    font-size: 18px;
    font-family: Franklin Gothic;
    text-align: center;
`;

export const PopupList = styled.ul`
    list-style: none;
    padding: 20px;
`;

export const PopupListItem = styled.li`
    font-size: 18px;
    font-family: Franklin Gothic;
    line-height: 2.0;
`;

export const ListDiv = styled.div`
    display: flex;
`;