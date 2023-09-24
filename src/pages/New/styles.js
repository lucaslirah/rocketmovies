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
    header{
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        margin-bottom: 4rem;
    }

    input, textarea{
        font-family: Roboto, sans-serif;
    }
`