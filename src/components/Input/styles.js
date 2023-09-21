import styled from "styled-components"

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    border-radius: 1rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    >input{
        height: 5.6rem;
        width: 100%;
        
        padding: 1.2rem;
        background: transparent;
        border: none;
        
        color: ${({ theme }) => theme.COLORS.WHITE_000};

        &:placeholder{
        color: ${({ theme }) => theme.COLORS.GRAY_900};
        }

        >svg{
            margin-left: 1rem;
        }
    }
`