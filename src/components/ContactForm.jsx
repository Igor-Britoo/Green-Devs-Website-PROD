import React, { useState } from "react"
import { FormContainer, InputContainer, InputLabel, InputField, InvestmentContainer, InvestmentValue, RangeInput, SubmitButton, TextArea, FormTitle, MarksContainer, Mark, ErrorSpan } from './styled/ContactFormComponents'
import Select from 'react-select'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser'

const selectCustomStyles = {
  control: (provided) => ({
    ...provided,
    boxSizing: 'border-box',
    width: '100%',
    padding: '4px 10px',
    color: '#FFF',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 400,
    boxShadow: 'none',
    outline: 'none',
    '&:hover': {
      border: '1px solid #B3B3B3'
    },
  }),
  menu: (provided) => ({
    ...provided,
    background: '#143636',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '4px',
  }),
  option: (provided, state) => ({
    ...provided,
    background: '#143636',
    color: '#FFF',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.1)',
    },
  }),
  multiValue: (provided) => ({
    ...provided,
    background: 'rgba(255, 255, 255, 0.2)',
    color: '#FFF',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: '#FFF',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: '#FFF',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.3)',
      color: '#FFF',
    },
  }),
}

const ContactForm = () => {
  const [isSubmittingForm, setIsSubmittingForm] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState([])
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    ideaDescription: '',
    investment: 20000,
  })
  const [errors, setErrors] = useState({})

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\(\d{2}\)\s9\d{4}-\d{4}$/
    return phoneRegex.test(phoneNumber)
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value.trimStart(),
    }))
  }

  const handleInvestmentChange = (value) => {
    setFormValues({
      ...formValues,
      investment: value
    })
  }

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '')

    if (value.length > 2 && value.length <= 7) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`
    } 
    else if (value.length > 7) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`
    }
    setFormValues((prevValues) => ({
      ...prevValues,
      phoneNumber: value,
    }))
  }

  const resetForm = () => {
    setFormValues({
      name: '',
      email: '',
      phoneNumber: '',
      ideaDescription: '',
      investment: 20000,
    })
    setSelectedOptions([])
    setErrors({})
  }

  const handleSubmit = (event) => {
    setIsSubmittingForm(true)
    event.preventDefault()
    const newErrors = {}

    if (!validatePhoneNumber(formValues.phoneNumber)) {
      newErrors.phoneNumber = 'Telefone inválido. Use o padrão (XX) 9XXXX-XXXX'
    }

    if (Object.keys(newErrors).length === 0) { 
      setErrors({})
      const templateParams = {
        name: formValues.name,
        email: formValues.email,
        phoneNumber: formValues.phoneNumber,
        ideaDescription: formValues.ideaDescription,
        servicesSelected: selectedOptions.map(option => option.label).join(", "),
        investment: formValues.investment.toString()
      }
      
      emailjs.send('service_ejvb3go', 'template_t3lc4uc', templateParams, 'sUNRYBDxDbS-FJcLp')
      .then((result) => {
        console.log(result)
        toast.success('Email sent successfully!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: false,
          progress: undefined,
          theme: "dark",
        })
        resetForm()
      })
      .catch((error) => {
        console.log(error)
        toast.error('Error sending email. Please try again.', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: false,
          progress: undefined,
          theme: "dark",
        })
      })
    }
    else {  
      setErrors(newErrors)
    }
    setTimeout(() => setIsSubmittingForm(false), 500)
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Contato</FormTitle>

      <InputContainer>
        <InputLabel htmlFor="name">Nome</InputLabel>
        <InputField
          type="text"
          placeholder="Ex. John Doe"
          id="name"
          value={formValues.name}
          onChange={handleChange}
          required
        />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField
          type="email"
          placeholder="ex.doe@gmail.com"
          id="email"
          value={formValues.email}
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          onChange={handleChange}
          required
        />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="phoneNumber">Telefone</InputLabel>
        <InputField
          type="tel"
          placeholder="(XX) 9XXXX-XXXX"
          id="phoneNumber"
          value={formValues.phoneNumber}
          onChange={handlePhoneChange}
          required
        />
        {errors.phoneNumber && <ErrorSpan>{errors.phoneNumber}</ErrorSpan>}
      </InputContainer>

      <InputContainer>
        <InputLabel htmlFor="services">Escolha um serviço:</InputLabel>
        <Select
          isMulti
          value={selectedOptions}
          onChange={(selected) => setSelectedOptions(selected)}
          options={[
            { value: 'conception', label: 'Concepção' },
            { value: 'design', label: 'Design' },
            { value: 'development', label: 'Desenvolvimento' },
          ]}
          placeholder="Escolha uma opção: "
          styles={selectCustomStyles}
          required
        />
      </InputContainer>

      <InputContainer>
        <InputLabel htmlFor="ideaDescription">Descrição da Ideia</InputLabel>
        <TextArea
          rows="4"
          placeholder="Descrição resumida da ideia"
          id="ideaDescription"
          value={formValues.ideaDescription}
          onChange={handleChange}
          required
        ></TextArea>
      </InputContainer>

      <InputContainer>
        <InvestmentContainer>
          <InputLabel>Pretensão de Investimento</InputLabel>
          <InvestmentValue>
            {formValues.investment === 20000 ? "Até " : ""}
            {formValues.investment === 100000 ? "Mais de " : ""}
            {formValues.investment !== 20000 && formValues.investment !== 100000 ? "Cerca de " : ""}
            R$ {formValues.investment.toLocaleString('pt-BR')},00
          </InvestmentValue>
        </InvestmentContainer>

        <RangeInput
          id="rangeInput"
          name="rangeInput"
          min="20000"
          max="100000"
          step="20000"
          value={formValues.investment}
          onChange={(e) => handleInvestmentChange(parseInt(e.target.value, 10))}
        />

        <MarksContainer>
          {[0, 25, 50, 75, 100].map((position, index) => (
            <Mark key={position} $position={position} onClick={() => handleInvestmentChange((index + 1) * 20000)} />
          ))}
        </MarksContainer>
      </InputContainer>

      <SubmitButton type="submit" disabled={isSubmittingForm}>Enviar</SubmitButton>
    </FormContainer>
  )
}

export default ContactForm
