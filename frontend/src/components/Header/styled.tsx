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
            cursor: pointer;
            display: block;

            img {
                width: 25px;
                margin-right: 10px;
                margin-top: 15px;
            }
        }
        nav {
            display: flex;

            .nav-list {
                display: flex;
                position: absolute;
                top: 8vh;
                left: 0;
                width: 35vh;
                height: 92vh;
                background-color: #dba90d;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                transform: translateX(-100%);
            }

            .nav-list.active {
                transform: translateX(0);
            }

            li {
                list-style: none;
                margin-right: 25px;
                opacity: 0;

                a {
                    text-decoration: none;
                    color: black;

                    &: hover{
                        color: #fff; 
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
