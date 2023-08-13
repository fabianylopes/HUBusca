import styled from "styled-components";

const Container = styled.div`
  background-color: #161b22;
  padding: 32px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  `

const SubContainer = styled.div`
  display: flex;
  gap: 10px;
  `

const Input = styled.input`
  padding: 10px;
  border-radius: 3px;
  outline: none;
  color: #2b3566;
  `

const Button = styled.button`
  background-color: #21262d;
  padding: 10px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
`

export { Container, SubContainer, Input, Button }