import React, { forwardRef } from 'react'
import { CardsContainer, ServicesSection, ServicesTitle, Card, CardIcon ,CardTitle } from './styled/ServicesComponents'
import conceptionIcon from '../assets/conception-icon.svg'
import developmentIcon from '../assets/development-icon.svg'
import designIcon from '../assets/design-icon.svg'

const Services = forwardRef((props, ref) => {
  return (
    <ServicesSection ref={ref} {...props}>
      <ServicesTitle>Serviços</ServicesTitle>
      <CardsContainer>
        <Card>
          <CardIcon src={conceptionIcon} alt="Conception Icon" />
          <CardTitle>Concepção</CardTitle>
        </Card>
        <Card $centerCard={'true'}>
          <CardIcon src={designIcon} alt="Design Icon" />
          <CardTitle>Design</CardTitle>
        </Card>
        <Card>
          <CardIcon src={developmentIcon} alt="Development Icon" />
          <CardTitle>Desenvolvimento</CardTitle>
        </Card>
      </CardsContainer>
    </ServicesSection>
  )
})

export default Services