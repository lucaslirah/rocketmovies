import styled from "styled-components"

export const Container = styled.div`
    border-radius: 16px;
    background-color: ${({ theme }) => theme.COLORS.PINK_DARK};

    padding: 32px;
`
export const Textarea = styled.textarea`
    width: 100%;
    height: 70px;

    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: justify;

    background: transparent;
    border: none;
    resize: none;

    margin: 1.5rem 0;
`