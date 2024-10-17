import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Contato {
  id: number
  name: string
  email: string
  phone: string
}

interface ContatosState {
  contatos: Contato[]
}

const initialState: ContatosState = {
  contatos: []
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    addContato: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const novoContato: Contato = {
        id: Date.now(),
        ...action.payload
      }
      state.contatos.push(novoContato)
    },
    removeContato: (state, action: PayloadAction<number>) => {
      state.contatos = state.contatos.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editaContato: (
      state,
      action: PayloadAction<{ id: number; data: Partial<Omit<Contato, 'id'>> }>
    ) => {
      const { id, data } = action.payload
      const contatoExistente = state.contatos.find(
        (contato) => contato.id === id
      )
      if (contatoExistente) {
        Object.assign(contatoExistente, data)
      }
    }
  }
})

export const { addContato, removeContato, editaContato } = contatosSlice.actions

export default contatosSlice.reducer
