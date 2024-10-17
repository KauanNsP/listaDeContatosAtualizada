import React from 'react'
import { Contato as ContatoType } from '../store/contatosSlice'
import { ContatoCard, Button2 } from '../styles'

interface ContatoProps {
  contato: ContatoType
  onRemove: (id: number) => void
  onEdit: (contato: ContatoType) => void
}

const Contato: React.FC<ContatoProps> = ({ contato, onRemove, onEdit }) => {
  return (
    <ContatoCard>
      <div>
        <p>
          <strong>Nome:</strong> {contato.name}
        </p>
        <p>
          <strong>Email:</strong> {contato.email}
        </p>
        <p>
          <strong>Telefone:</strong> {contato.phone}
        </p>
      </div>
      <div>
        <Button2 variant="edit" onClick={() => onEdit(contato)}>
          Editar
        </Button2>
        <Button2 variant="remove" onClick={() => onRemove(contato.id)}>
          Remover
        </Button2>
      </div>
    </ContatoCard>
  )
}

export default Contato
