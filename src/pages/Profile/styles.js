import styled from "styled-components"

export const Container = styled.div`

    header{
        width: 100%;
        height: 144px;

        display: flex;
        align-items: center;

        background-color: ${({ theme }) => theme.COLORS.PINK_DARK};

        button{
            margin-left: 14rem;
        }
    }
`
export const Form = styled.form`
    max-width: 40rem;
    margin: -90px auto 0;

    div + div{
        margin-bottom: 8px;
    }
    div + div:nth-child(odd){
        margin-bottom: 24px;
    }
`
export const Avatar = styled.div`
    position: relative;
    margin: 0 auto 6.4rem;
    width: 18rem;
    height: 18rem;

    >img{
        width: 18rem;
        height: 18rem;

        border-radius: 50%;
    }

    >label{
        position: absolute;
        bottom: 0;
        right: 0;
        
        width: 48px;
        height: 48px;
        
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 50%;
        
        
        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;

        input{
            display: none;
        }
        
        svg{
            width: 20px;
            height: 20px;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }
    }
`