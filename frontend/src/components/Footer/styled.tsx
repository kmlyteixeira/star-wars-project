import styled from 'styled-components';

export const AreaFooter = styled.div`
    background-color: #020004;
    text-align: center;
    padding: 10px;
    font-size: 14px;
    font-family: Courier New, monospace;
    color: white;

    bottom: 0;
    position: fixed;
    width: 100%;

   ul {

    display: flex;
    margin-left: 70px;

        li {
            list-style: none;

            img {
                width: 15px;
                margin-left: 10px;
            }
        }

        .text-aux-foot {
            font-size: 10px;
            margin-left: 925px;
        }
   }
`;