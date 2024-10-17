import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const cores = {
  cor1: '#'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    color: '#fff';
  }

  body {
    background-color: '#1a1a1a';
    padding-bottom: 80px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1024px) {
      max-width: 80%;
    }
  }
`

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`

export const Header = styled.h1`
  text-align: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`

export const Input = styled.input`
  margin: 5px 0;
  padding: 8px;
  font-size: 16px;
`

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 3px;

  &:hover {
    opacity: 0.9;
  }
`

export const ContatoCard = styled.div`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Button2 = styled.button<{ variant?: 'edit' | 'remove' }>`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: ${(props) =>
    props.variant === 'edit' ? '#28a745' : '#dc3545'};
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    opacity: 0.8;
  }
`
