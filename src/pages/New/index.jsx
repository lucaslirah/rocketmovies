import { ButtonText } from '../../components/ButtonText'
import { NoteItem } from '../../components/NoteItem'
import { Textarea } from '../../components/Textarea'
import { Container, Form, Markers } from './styles'
import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { FiArrowLeft } from 'react-icons/fi'

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

                    <div className='inputs'>
                        <Input type="text" placeholder="Título"/>
                        <Input type="number" min="1" max="5" placeholder="Sua nota (de 0 a 5)"/>
                    </div>

                    <Textarea placeholder="Observações"/>

                    <Section title="Marcadores">
                        <Markers>
                            <li>
                                <NoteItem value="Ação" />
                            </li>
                            <li>
                                <NoteItem placeholder="Novo marcador" $isNew/>
                            </li>
                        </Markers>
                    </Section>

                    <div className='buttons'>
                        <Button title="Excluir nota"/>
                        <Button title="Salvar alterações"/>
                    </div>
                </Form>
            </main>
        </Container>
    )
}