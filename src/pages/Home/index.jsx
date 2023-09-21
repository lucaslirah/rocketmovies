import { Container } from './styles'
import { Button } from '../../components/Button'
import { FiPlus } from 'react-icons/fi'

export function Home(){
    return(
        <Container>
            <Button title="Adicionar filme" icon={FiPlus}/>
        </Container>
    )
}