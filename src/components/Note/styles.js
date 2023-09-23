import styled from "styled-components"

export const Container = styled.div`
    border-radius: 16px;
    background-color: ${({ theme }) => theme.COLORS.PINK_DARK};

    padding: 32px;
    margin-bottom: 2.4rem;
`
export const Rating = styled.div`
    >svg{
        color: ${({ theme }) => theme.COLORS.PINK};
        fill: ${({ theme }) => theme.COLORS.PINK};
        margin-top: 8px;
    }
    >svg:nth-child(5){
        color: ${({ theme }) => theme.COLORS.PINK};
        fill: transparent;
    }
`
export const Textarea = styled.textarea`
    width: 100%;

    overflow: hidden;
    text-overflow: ellipsis;

    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: justify;

    background: transparent;
    border: none;
    resize: none;

    margin: 1.5rem 0;
`