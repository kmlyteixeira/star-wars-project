import styled from 'styled-components';

export const AreaFooter = styled.div`
    background-color: #020004;
    text-align: center;
    padding: 10px;
    font-size: 13px;
    font-family: Courier New, monospace;
    color: white;

    bottom: 0;
    position: fixed;
    width: 100%;
    height: 5vh;

   ul {

    display: list-item;
    position: relative;

        li {
            list-style: none;

            img {
                width: 10px;
                margin-left: 10px;
            }
        }

        .text-aux-foot {
            font-size: 9.5px;
        }
   }
`;