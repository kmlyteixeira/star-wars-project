import styled from 'styled-components';

export const AreaHeader = styled.div`
    height: 60px;
    background-image: linear-gradient(to right, #020004, #4E0000);
    color: #FFF;

    .container {
        padding: 5px 20px;
        display: flex;
        align-itens: center;
    }
        .logo {
            flex: 1;
             img {
                width: 100px;
                margin-left: 10px;
             }
        }

        .menu {
            img {
                width: 25px;
                margin-right: 10px;
                margin-top: 15px;
            }
        }
        nav {
            ul {
                display: flex;
            }

            li {
                list-style: none;
                margin-left: 20px;

                a {
                    text-decoration: none;
                    color: #fff;

                    &: hover{
                        color: #FCA311; 
                    }
                }
            }
        }
`;
