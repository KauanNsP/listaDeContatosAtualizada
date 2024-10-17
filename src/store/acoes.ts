import {
  Contato,
  Add_contato,
  Remove_contato,
  Edita_contato,
  ContatoTypes
} from './index'

export const addContato = (contato: Contato): ContatoTypes => ({
  type: Add_contato,
  payload: contato
})

export const removeContato = (id: number): ContatoTypes => ({
  type: Remove_contato,
  payload: id
})

export const editContato = (
  id: number,
  data: Partial<Omit<Contato, 'id'>>
): ContatoTypes => ({
  type: Edita_contato,
  payload: { id, data }
})
