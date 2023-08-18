type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
}

import { useState, KeyboardEvent, ChangeEvent } from "react";
import { BsSearch } from "react-icons/bs";

import { Container, SubContainer, Input, Button } from "./style";

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
          onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={() => loadUser(userName)}>
          <BsSearch />
        </Button>
      </SubContainer>
    </Container>
  )
}

