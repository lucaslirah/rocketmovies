import { Container, Form } from './styles'
import { FiArrowLeft } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'

export function New(){
    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <ButtonText title="Voltar" icon={FiArrowLeft}/>
                        <h1>Novo filme</h1>
                    </header>

                    <Input type="text" placeholder="Título"/>
                    <Input type="number" min="1" max="5" placeholder="Sua nota (de 0 a 5)"/>
                    <Textarea placeholder="Observações"/>

                                        
                </Form>
            </main>
        </Container>
    )
}