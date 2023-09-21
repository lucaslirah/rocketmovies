import { Container } from './styles'

export function Button({ icon: Icon, title, loading = false, ...rest }){
    return(
        <Container 
            type='button'
            { ...rest }
            disabled={loading}
            >
                {Icon ? <Icon icon={toString(Icon)}/> : ''}
                { loading ? 'carregando' : title }
        </Container>
    )
}
