import styled from "styled-components";

export const ContainerHome = styled.ul`
        .card-link {
            margin-top: 75px;
            margin-left: 150px;
            position: relative;
            list-style: none;
        
            img {
                width: 500px; 
                height: 200px; 
                object-fit: cover;
            }
        
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