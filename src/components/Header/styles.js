import styled from 'styled-components'

export const Container = styled.div`
    grid-area: header;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 11.6rem;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding: 0 12rem;
`
export const Brand = styled.div`
    color: ${({ theme }) => theme.COLORS.PINK};
`
export const Search = styled.div`
    width: 63rem;
`
export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 9px;

    >img{
        width: 6.4rem;
        height: 6.4rem;

        border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
        border-radius: 50%;
    }

    >div{
        display: flex;
        flex-direction: column;
        align-items: end;

        font-size: 1.4rem;

        strong{
            color: ${({ theme }) => theme.COLORS.WHITE_800};
            font-weight: 700;
        }

        a{
            color: ${({ theme }) => theme.COLORS.GRAY_900};
            font-weight: 400;
        }
    }
`