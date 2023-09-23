import { Button } from '../../components/Button'
import { FiMail, FiLock } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Container, Form, Background } from './styles'

export function SignIn(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input type="email" placeholder="E-mail" icon={FiMail}/>

                <Input  type="password" placeholder="Senha" icon={FiLock}/>

                <Button title="Entrar"></Button>

                <a href="#">
                    Criar conta
                </a>
            </Form>

            <Background />
        </Container>
    )
}