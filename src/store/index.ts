import type { Contato } from './contatosSlice'

export const Add_contato = 'Add_contato'
export const Remove_contato = 'Remove_contato'
export const Edita_contato = 'Edita_contato'

export interface AppState {
  contatos: Contato[]
}

interface AddContato {
  type: typeof Add_contato
  payload: Contato
}

interface RemoveContato {
  type: typeof Remove_contato
  payload: number
}

interface EditaContato {
  type: typeof Edita_contato
  payload: {
    id: number
    data: Partial<Omit<Contato, 'id'>>
  }
}

export type ContatoTypes = AddContato | RemoveContato | EditaContato
export { Contato }
