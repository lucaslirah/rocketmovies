import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    :root{
        font-size: 62.5%;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
        color: ${({ theme }) => theme.COLORS.WHITE_000};

        -webkit-font-smoothing: antialiased;
    }

    body, button, input{
        font-family: Roboto Slab, serif;
        font-size: 1.6rem;
        outline: none;
    }
    textarea{
        font-family: Roboto, sans-serif;
        font-size: 1.6rem;
        outline: none;
    }

    body::-webkit-scrollbar, main::-webkit-scrollbar {
        width: 8px;               /* width of the entire scrollbar */
    }

    body::-webkit-scrollbar-track, main::-webkit-scrollbar-track {
        background: transparent;        /* color of the tracking area */
    }

    body::-webkit-scrollbar-thumb, main::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};    /* color of the scroll thumb */
        border-radius: 8px;       /* roundness of the scroll thumb */
        border: none;  /* creates padding around scroll thumb */
    }


    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: all .2s;
    }

    button:hover, a:hover{
        filter: brightness(0.8);
    }
`