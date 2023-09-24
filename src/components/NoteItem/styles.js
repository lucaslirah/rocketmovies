import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};

    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.BACKGROUND_900}` : "none"};

    border-radius: 10px;
    padding-right: 16px;

    >input{
        height: 56px;
        width: 100%;

        padding: 16px;
        border: none;

        color: ${({ theme }) => theme.COLORS.WHITE_000};
        background: transparent;

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_900};
        }
    }

    >button{
        border: none;
        background: none;
    }

    .button-add{
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    .button-delete{
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`