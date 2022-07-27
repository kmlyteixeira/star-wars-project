import styled from "styled-components";

export const Parent = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .card {
        margin: 5%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        width: 20%;
        background-color: white;

        h4 {
            color: #DBA90D;
        }
        
    }

    .container {
        padding: 2px 16px;
        text-align: center;
    }

`;