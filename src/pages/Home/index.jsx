import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { FiPlus } from 'react-icons/fi'
import { Container } from './styles'

export function Home(){
    return(
        <Container>
            <Header/>
            
            <Button title="Adicionar filme" icon={FiPlus}/>
        </Container>
    )
}