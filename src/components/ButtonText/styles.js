import styled from 'styled-components'

export const Container = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;

    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 1.6rem;
`