import React, { useState } from 'react';
import { Answer, FAQContainer, FAQItem, FAQSection, FAQTitle, PlusMinusIcon, Question } from './styled/FAQComponents'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Como você lida com informações confidenciais e segurança de dados?',
      answer: 'Seguimos os padrões da indústria para segurança e privacidade...',
    },
    {
      question: 'Quanto custa uma consultoria?',
      answer: 'O custo depende do escopo e da duração do projeto...',
    },
    {
      question: 'Que tipo de suporte você oferece após a conclusão do projeto?',
      answer: 'Oferecemos suporte contínuo por um período definido...',
    },
    {
      question: 'Como os serviços de consultoria podem beneficiar minha empresa?',
      answer: 'Nossos serviços ajudam a otimizar seus processos e aumentar a eficiência...',
    },
    {
      question: 'Que tipos de serviços de consultoria você oferece?',
      answer: 'Oferecemos serviços em desenvolvimento de software, consultoria em TI e mais...',
    },
    {
      question: 'Quais são as principais etapas do seu ciclo de vida de desenvolvimento de software?',
      answer: 'Nosso processo inclui levantamento de requisitos, design, desenvolvimento, testes e implantação...',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQSection>
      <FAQTitle>Perguntas Frequentes</FAQTitle>

      <FAQContainer>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <Question onClick={() => toggleFAQ(index)}>
              {faq.question}
              <PlusMinusIcon>
                {openIndex === index ? '-' : '+'}
              </PlusMinusIcon>
            </Question>
            <Answer $isOpen={openIndex === index}>{faq.answer}</Answer>
          </FAQItem>
        ))}
      </FAQContainer>
    </FAQSection>
  );
};

export default FAQ;
