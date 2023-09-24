import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, Form, Avatar } from './styles'

export function Profile(){
    return(
        <Container>
            <header>
                <ButtonText title="Voltar" icon={FiArrowLeft}/>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/lucaslirah.png" alt="Imgem do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input
                            type="file"
                            id='avatar'
                        />
                    </label>
                </Avatar>

                <Input
                    type="text"
                    placeholder="Nome"
                    icon={FiUser}
                />
                <Input
                    type="email"
                    placeholder="E-mail"
                    icon={FiMail}
                />
                <Input
                    type="password"
                    placeholder="Senha atual"
                    icon={FiLock}
                />
                <Input
                    type="password"
                    placeholder="Nova senha"
                    icon={FiLock}
                />

                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}