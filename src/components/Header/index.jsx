import { Container, Brand, Profile, Search } from './styles'
import { Link } from 'react-router-dom'
import { Input } from '../Input'

export function Header(){
    return(
        <Container>
            <div>
                <Brand>
                    <Link to="/">
                        <h1>Rocketmovies</h1>
                    </Link>
                </Brand>
                <Search>
                    <Input placeholder="Pesquisar pelo título"/>
                </Search>
                <Profile>
                    <div>
                        <strong>Lucas Lira</strong>
                        <a href="#">Sair</a>
                    </div>
                    <Link to="/profile">
                        <img
                            src="http://github.com/lucaslirah.png"
                            alt="Imagem do usuário"
                        />
                    </Link>
                </Profile>
            </div>
        </Container>
    )
}