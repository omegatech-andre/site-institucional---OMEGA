'use client'
import './index.scss'
import { Container, Accordion } from '@mantine/core';
import { perguntasCursoEstampador } from'../../../mocks/perguntasFrequentes'

export default function Faq() {
  return (
    <Container className='faq'>
      <h1><span>Perguntas</span> frequentes</h1>
      <Accordion variant="separated" className='faq__accordion'>
        {perguntasCursoEstampador.map(({id, value, pergunta, resposta }) => (
          <Accordion.Item className='faq__accordion--item' key={id} value={value}>
            <Accordion.Control className='text'>{pergunta}</Accordion.Control>
            <Accordion.Panel ta='initial' className='text'>{resposta}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}