import { Container, Brand, Profile, Search } from './styles'
import { Input } from '../Input'

export function Header(){
    return(
        <Container>
            <Brand>
                <h1>Rocketmovies</h1>
            </Brand>

            <Search>
                <Input placeholder="Pesquisar pelo título"/>
            </Search>

            <Profile>
                <div>
                    <strong>Lucas Lira</strong>
                    <a href="#">Sair</a>
                </div>

                <img 
                    src="http://github.com/lucaslirah.png" 
                    alt="Imagem do usuário"
                />
            </Profile>
  
        </Container>
    )
}