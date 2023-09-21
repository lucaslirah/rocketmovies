import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.WHITE_000};
    a{
        color: ${({ theme }) => theme.COLORS.PINK};
    }
    button{
        background-color: ${({ theme }) => theme.COLORS.PINK};
    }
`