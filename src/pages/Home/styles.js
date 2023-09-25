import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
export const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
`
export const MyMovies = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 3rem;

    h2{
        font-size: 3.2rem;
        font-weight: 400;
    }
    
    button{
        width: 20rem;

        border-radius: 8px;
    }
`