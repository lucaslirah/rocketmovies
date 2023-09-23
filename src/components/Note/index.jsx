import { Container, Rating, Textarea } from './styles'
import { Tag } from '../Tag'

export function Note({ data, icon:Icon, ...rest }){
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>

            <Rating>
                <Icon/>
                <Icon/>
                <Icon/>
                <Icon/>
                <Icon/>
            </Rating>

            <Textarea value={data.description} readOnly></Textarea>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
                    }
                </footer>
            }

        </Container>
    )
}