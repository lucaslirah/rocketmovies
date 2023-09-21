import styled from "styled-components"

export const Container = styled.button`
    width: 100%;
    height: 5.6rem;

    display: flex;
    align-items: center;
    justify-content:center;
    gap: 8px;
    
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    font-weight: 500;
        
    padding: 0 1.3rem;
    border: none;
    border-radius: 1rem;

    &:disabled{
        opacity: 0.8;
    }

    >Icon{
        border: none;
        background: transparent;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.BACKGROUND_100};
    }
`