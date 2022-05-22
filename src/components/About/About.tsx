import React from 'react';
import Card from '../Card/Card';

const About = () => {
  return (
    <div className='w-screen flex flex-col justify-center items-center py-12'>
      <div className='text-3xl font-bold'>Sobre</div>

      <div className='w-[70rem] mt-4 text-justify'>Nascida em Benavente, Portugal, é uma mãe guerreira. Criou sozinha seus 2 filhos, com muito amor, espírito de sacrifício e total dedicação perante uma história de vida complicada, onde perdeu  tudo o que construiu por três vezes, levantado-se e seguindo sempre em frente, com a força e coragem que a caracteriza, ressurgindo das cinzas sempre sozinha, como uma autêntica Fénix!</div>
      <div className='w-[70rem] mt-4 text-justify'>Ao longo de 21 anos de aprendizagem, entre os seus estudos como autodidata, cursos, formações, workshops, atendimentos em consultório, Susana Bastos conseguiu reunir métodos, técnicas, e ferramentas cruciais e adequadas, que atuam de forma rápida e eficaz na resolução de problemas do foro mental, emocional, numa abordagem clínica e terapêutica que integra as mais variadas ferramentas de Hipnose, Programação Neurolinguística e Inteligência Emocional.</div>
      <div className='w-[70rem] mt-4 text-justify'>É uma profissional altamente qualificada e possui uma dedicação extraordinária. Em sua jornada profissional, conta com milhares de casos de sucesso, tanto nas suas consultas presenciais, como on-line, cursos, workshops e palestras motivacionais.</div>
      <div className='w-[70rem] mt-4 text-justify'>Atualmente a residir no Luxemburgo, divide o seu trabalho entre Portugal e o Luxemburgo, país onde acabou  por se afirmar como uma das mais conceituadas Hipnoterapeutas e a Trainer número 1.</div>

      <div className='w-[70rem] flex justify-center gap-4 grid grid grid-cols-3 mt-8'>
        <Card title={'MISSÃO'} description={['Ajudar o próximo a ressignificar o passado, atingir o seu estado desejado no futuro e a ser FELIZ.']} />
        <Card title={'VISÃO'} description={['Ser feliz e realizada ao ajudar outras pessoas.']} />
        <Card title={'VALORES'} description={['Preza pela flexibilidade no atendimento, respeitando sempre o mapa mental do cliente. A realização ao motivar pessoas a viver com mais qualidade de pensamentos, emoções e sentimentos é o fator mais importante.']} />
      </div>
    </div>
  )
};

export default About;
