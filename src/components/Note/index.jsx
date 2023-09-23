import { Container, Textarea } from './styles'
import { Tags } from '../Tags'

export function Note({ data, icon:Icon, ...rest }){
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>

            <Icon/>
            <Icon/>
            <Icon/>
            <Icon/>
            <Icon/>

            <Textarea value={data.description} readOnly></Textarea>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tags key={tag.id} title={tag.name}/>)
                    }
                </footer>
            }

        </Container>
    )
}