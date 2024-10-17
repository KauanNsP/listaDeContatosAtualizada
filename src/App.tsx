import React, { useState } from 'react'
import ContatoForm from './components/contatoForm'
import Contato from './components/contato'
import type { Contato as ContatoType } from './store'
import { GlobalStyle, Container, Header } from './styles/index'
import { useDispatch, useSelector } from 'react-redux'
import { addContato, removeContato, editaContato } from './store/contatosSlice'

const App: React.FC = () => {
  const contatos = useSelector((state: any) => state.contatos.contatos)
  const dispatch = useDispatch()
  const [contatoParaEditar, setContatoParaEditar] =
    useState<ContatoType | null>(null)

  const handleAddOuEditarContato = (contato: Omit<ContatoType, 'id'>) => {
    if (contatoParaEditar) {
      dispatch(editaContato({ id: contatoParaEditar.id, data: contato }))
      setContatoParaEditar(null)
    } else {
      dispatch(addContato(contato))
    }
  }

  const handleRemoveContato = (id: number) => {
    dispatch(removeContato(id))
  }

  const handleEditarContato = (contato: ContatoType) => {
    setContatoParaEditar(contato)
  }

  const handleCancelarEdicao = () => {
    setContatoParaEditar(null)
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>Lista de Contatos</Header>
        <ContatoForm
          onSubmit={handleAddOuEditarContato}
          ContatoParaEditar={contatoParaEditar}
          CancelarEdicao={handleCancelarEdicao}
        />
        {contatos.length === 0 ? (
          <p>Nenhum contato adicionado.</p>
        ) : (
          contatos.map((contato: ContatoType) => (
            <Contato
              key={contato.id}
              contato={contato}
              onRemove={handleRemoveContato}
              onEdit={handleEditarContato}
            />
          ))
        )}
      </Container>
    </>
  )
}

export default App
