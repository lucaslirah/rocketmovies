import styled from "styled-components"
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`
export const Form = styled.form`
    padding: 0 13.4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    >h1{
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 4.8rem;
        font-weight: 700;
    }

    >p{
        color: ${({ theme }) => theme.COLORS.GRAY_400};
        font-size: 1.4rem;
        font-weight: 400;
        align-self: flex-start;
    }

    >h2{
        color: ${({ theme }) => theme.COLORS.WHITE_800};
        font-size: 2.4rem;
        font-weight: 500;
        align-self: flex-start;

        margin: 4.8rem 0;
    }

    >div{
        margin-bottom: 8px;
    }

    >button{
        margin: 16px 0 42px 0;
    }

    >a{
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`
export const Background = styled.svg`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`