import styled from "styled-components"

export const Container = styled.section`
    margin: 4rem 0;
    h2{
        font-size: 2rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        margin-bottom: 24px;
    }
`