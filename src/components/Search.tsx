type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
}

import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";

import styled from "styled-components";

export default function Search({loadUser}: SearchProps) {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key === "Enter"){
      loadUser(userName);
    }
  }

  return (
    <Container>
      <h2>Buscar Usuário</h2>
      <SubContainer>
        <Input 
          type="text" 
          placeholder="Digite o nome do usuário" 
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={() => loadUser(userName)}>
          <BsSearch />
        </Button>
      </SubContainer>
    </Container>
  )
}

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