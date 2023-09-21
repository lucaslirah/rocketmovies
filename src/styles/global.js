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