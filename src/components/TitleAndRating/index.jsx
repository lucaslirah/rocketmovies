import { Container } from './styles'

export function TitleAndRating({ title, icon: Icon, ...rest }){
    return (
        <Container
            {...rest}
        >
            {title}
            <div>
                <Icon size={20}/>
                <Icon size={20}/>
                <Icon size={20}/>
                <Icon size={20}/>
                <Icon size={20}/>
            </div>
        </Container>
    )
}