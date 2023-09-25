import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas:
    "header"
    "content"
    ;

    >main{
        grid-area: content;
        overflow-y: auto;

        padding: 5rem 12rem;
    }
`
export const Form = styled.form`
        max-width: 1200px;
        margin: 0 auto;
        padding: 4rem 0;
    header{
        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        margin-bottom: 4rem;
    }

    input, textarea{
        font-family: Roboto, sans-serif;
    }

    .inputs{
        display: flex;
        gap: 4rem;

        margin-bottom: 4rem;
    }

    .buttons{
        display: flex;
        gap: 4rem;

        >button:nth-child(1){
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_000};
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`
export const Markers = styled.ul`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 24px;

    list-style: none;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_000};
    padding: 16px;
    border-radius: 8px;
`