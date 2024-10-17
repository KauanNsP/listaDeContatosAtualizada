import React, { useState, useEffect } from 'react'
import { Contato } from '../store/contatosSlice'
import { Input, Form, Button } from '../styles'

interface ContatoFormProps {
  onSubmit: (contato: Omit<Contato, 'id'>) => void
  ContatoParaEditar?: Contato | null
  CancelarEdicao?: () => void
}

const ContatoForm: React.FC<ContatoFormProps> = ({
  onSubmit,
  ContatoParaEditar,
  CancelarEdicao
}) => {
  const [contato, setContato] = useState<Omit<Contato, 'id'>>({
    name: '',
    email: '',
    phone: ''
  })

  useEffect(() => {
    if (ContatoParaEditar) {
      setContato({
        name: ContatoParaEditar.name,
        email: ContatoParaEditar.email,
        phone: ContatoParaEditar.phone
      })
    } else {
      setContato({ name: '', email: '', phone: '' })
    }
  }, [ContatoParaEditar])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContato({ ...contato, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (contato.name && contato.email && contato.phone) {
      onSubmit(contato)
      setContato({ name: '', email: '', phone: '' })
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Nome Completo"
        value={contato.name}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={contato.email}
        onChange={handleChange}
        required
      />
      <Input
        type="tel"
        name="phone"
        placeholder="Telefone"
        value={contato.phone}
        onChange={handleChange}
        required
      />
      <Button type="submit">
        {ContatoParaEditar ? 'Editar' : 'Adicionar'} Contato
      </Button>
      {ContatoParaEditar && CancelarEdicao && (
        <Button
          type="button"
          onClick={CancelarEdicao}
          style={{ backgroundColor: '#6c757d' }}
        >
          Cancelar
        </Button>
      )}
    </Form>
  )
}

export default ContatoForm
