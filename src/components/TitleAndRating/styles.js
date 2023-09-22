import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 19px;

    font-size: 3.6rem;
    font-weight: 500;

    svg{
        fill: ${({ theme }) => theme.COLORS.PINK};
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-right: 8px;
    }
    svg:nth-child(5){
        fill: transparent;
    }
`