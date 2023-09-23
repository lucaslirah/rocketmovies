import { Container, Content, MyMovies } from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Note } from '../../components/Note'
import { Tags } from '../../components/Tags'
import { FiPlus } from 'react-icons/fi'
import { FiStar } from 'react-icons/fi'

export function Home(){
    return(
        <Container>
            <Header/>
            
            <main>
                <Content>
                    <MyMovies>
                        <h2>Meus filmes</h2>
                        <Button title="Adicionar filme" icon={FiPlus}/>
                    </MyMovies>

                    <Note icon={FiStar} data={{
                        title: 'Interstellar', 
                        tags: [
                            {id: 1, name: 'Ficção Científica'},
                            {id: 2, name: 'Drama'},
                            {id: 3, name: 'Família'},
                        ],
                        description: `Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional,`
                    }}/>                    
                </Content>
            </main>
        </Container>
    )
}