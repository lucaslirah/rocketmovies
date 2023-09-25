import { Container, Content, MyMovies } from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Note } from '../../components/Note'
import { FiPlus } from 'react-icons/fi'
import { FiStar } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export function Home(){
    return(
        <Container>
            <Header/>
            
            <main>
                <Content>
                    <MyMovies>
                        <h2>Meus filmes</h2>
                        <Link to="/new">
                            <Button title="Adicionar filme" icon={FiPlus}/>
                        </Link>
                    </MyMovies>

                    <Note icon={FiStar} data={{
                        title: 'Oppenheimer', 
                        tags: [
                            {id: 1, name: 'Biografia'},
                            {id: 2, name: 'Histórico'},
                            {id: 3, name: 'Suspense'},
                        ],
                        description:`Oppenheimer é um filme histórico de drama dirigido por Christopher Nolan e baseado no livro biográfico vencedor do Prêmio Pulitzer, Prometeu Americano: O Triunfo e a Tragédia de J. Robert Oppenheimer, escrito por Kai Bird e Martin J. Sherwin. Ambientado na Segunda Guerra Mundial, o longa acompanha a vida de J. Robert Oppenheimer (Cillian Murphy), físico teórico da Universidade da Califórnia e diretor do Laboratório de Los Alamos durante o Projeto Manhattan - que tinha a missão de projetar e construir as primeiras bombas atômicas. A trama acompanha o físico e um grupo formado por outros cientistas ao longo do processo de desenvolvimento da arma nuclear que foi responsável pelas tragédias nas cidades de Hiroshima e Nagasaki, no Japão, em 1945. Além de Cillian, o elenco também traz nomes como Emily Blunt, Matt Damon, Robert Downey Jr., Florence Pugh, Gary Oldman, Jack Quaid, Gustaf Skarsgård, Rami Malek e Kenneth Branagh.
                        `
                    }}/>
                    
                    <Note icon={FiStar} data={{
                        title: 'Iron Man', 
                        tags: [
                            {id: 1, name: 'Ficção Científica'},
                            {id: 2, name: 'Ação'},
                            {id: 3, name: 'Super Herói'},
                        ],
                        description:`Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor. Ao ser sequestrado ele é obrigado por terroristas a construir uma arma devastadora mas, ao invés disto, constrói uma armadura de alta tecnologia que permite que fuja de seu cativeiro. A partir de então ele passa a usá-la para combater o crime, sob o alter-ego do Homem de Ferro.
                        `
                    }}/>

                    <Note icon={FiStar} data={{
                        title: 'Interstellar', 
                        tags: [
                            {id: 1, name: 'Ficção Científica'},
                            {id: 2, name: 'Drama'},
                            {id: 3, name: 'Família'},
                        ],
                        description:`Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.

                        Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.
                        `
                    }}/>                      
                </Content>
            </main>
        </Container>
    )
}