import styled from 'styled-components'

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

    button{
        margin-bottom: 24px;
    }

    .tags{
        margin-bottom: 4rem;
        span{
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
        }
    }

    p{
        font-size: 1.6rem;
        text-align: justify;
        color: ${({ theme }) => theme.COLORS.WHITE_800};
    }
`
export const NoteDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    margin: 2.4rem 0 4rem 0;

    color: ${({ theme }) => theme.COLORS.WHITE_800};
    font-family: Roboto, sans-serif;
    font-size: 1.6rem;
    font-weight: 400;

    >img{
        width: 1.6rem;

        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
    >svg{
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`
export const TitleAndRating = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    
    h1{
        font-size: 3.6rem;
        font-weight: 500;
    }

    svg{
        fill: ${({ theme }) => theme.COLORS.PINK};
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-right: 8px;
    }
    svg:nth-child(5){
        fill: transparent;
    }
`