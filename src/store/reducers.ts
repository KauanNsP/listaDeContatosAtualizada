import {
  ContatoTypes,
  Add_contato,
  Remove_contato,
  Edita_contato
} from './index'
import type { Contato, AppState } from './index'

const initialState: AppState = {
  contatos: []
}

export const contatoReducer = (
  state = initialState,
  action: ContatoTypes
): AppState => {
  switch (action.type) {
    case Add_contato:
      return { ...state, contatos: [...state.contatos, action.payload] }
    case Remove_contato:
      return {
        ...state,
        contatos: state.contatos.filter(
          (contato: Contato) => contato.id !== action.payload
        )
      }
    case Edita_contato:
      return {
        ...state,
        contatos: state.contatos.map((contato: Contato) =>
          contato.id === action.payload.id
            ? { ...contato, ...action.payload.data }
            : contato
        )
      }
    default:
      return state
  }
}
