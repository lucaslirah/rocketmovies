import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Tags } from '../../components/Tags'
import { Container, Content } from './styles'
import { FiPlus } from 'react-icons/fi'

export function Home(){
    return(
        <Container>
            <Header/>
            
            <main>
                <Content>
                    <div className='myMovies'>
                        <h2>Meus filmes</h2>
                        <Button title="Adicionar filme" icon={FiPlus}/>
                    </div>
                    <ul>
                        <li><Tags title="Ação"/></li>
                    </ul>
                    
                </Content>
            </main>
        </Container>
    )
}