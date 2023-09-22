import styled from 'styled-components'

export const Container = styled.span`
    font-family: Roboto, sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE_500};

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border-radius: 8px;

    padding: 8px 16px;
    margin-right: 8px;
`