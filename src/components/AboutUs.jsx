import React from 'react'
import { AboutUsSection, AboutUsTitle, Text } from './styled/AboutUsComponents'

const AboutUs = () => {
  return (
    <AboutUsSection>
      <AboutUsTitle>Sobre nós</AboutUsTitle>
      <Text>
        Somos uma equipe de mestres e bachareis em Administração e Computação pela Universidade Federal Rural de Pernambuco. Acreditamos que as organizações devem atuar com responsabilidade social e ambiental, promovendo um impacto positivo na sociedade e no meio ambiente.
        <br/>
        <br/>
        Nossa equipe é composta por gestores de projetos experientes, desenvolvedores full stack e designers criativos. Combinamos nossas habilidades técnicas e gerenciais para oferecer soluções inovadoras e criativas, sempre focados em atender às necessidades dos nossos clientes e contribuir para um futuro melhor.
      </Text>
    </AboutUsSection>
  )
}

export default AboutUs