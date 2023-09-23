import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { ButtonText } from '../../components/ButtonText'
import { Container, Form, Background } from './styles'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function SignUp(){
    return(
        <Container>
            <Background />

            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input type="text" placeholder="Nome" icon={FiUser}/>

                <Input type="email" placeholder="E-mail" icon={FiMail}/>

                <Input  type="password" placeholder="Senha" icon={FiLock}/>

                <Button title="Cadastrar"></Button>

                <ButtonText title="Voltar para Login" icon={FiArrowLeft}/>
            </Form>

        </Container>
    )
}