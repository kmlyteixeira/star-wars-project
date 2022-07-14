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
            display: flex;

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

            .avatar {
                display: flex;
                align-items: center;

                img {
                    width: 35px;
                    border-radius: 20px;
                    margin-right: 10px;
                    margin-left: 20px;
                    cursor: pointer;
                }

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
