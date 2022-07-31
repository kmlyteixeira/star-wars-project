import styled from 'styled-components';

export const AreaHeader = styled.div`
    height: 8vh;
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
            display: flex;

            ul {
                display: flex;
                
                    li {
                    list-style: none;
                    margin-right: 25px;
                    a {
                        text-decoration: none;
                        color: white;

                        &: hover{
                            color: #DBA90D; 
                        }
                    }
                }
            }

            .avatar {
                display: flex;
                align-items: center;

                label {
                    font-size: 14px;
                    cursor: pointer;
                    color: white;
                }

                @media screen and (max-width: 600px){
                    label {
                        display: none;
                    }
                }
            }
        }
`;

