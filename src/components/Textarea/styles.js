import styled from "styled-components"

export const Container = styled.textarea`
    width: 100%;
    height: 274px;

    color: ${({ theme }) => theme.COLORS.WHITE_000};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    border: none;
    resize: none;
    border-radius: 10px;
    padding: 19px 16px;

    &::placeholder{
        color: ${({ theme }) => theme.COLORS.GRAY_900};
    }
`