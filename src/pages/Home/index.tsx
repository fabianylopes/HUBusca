import { useState } from "react";
import axios from "axios";

import Search from "../../components/Search";
import { UserProps } from "../../types/user";
import User from "../../components/User";
import Error from "../../components/Error";
import { Container } from "./style";

export default function Home() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  
  async function loadUser(userName: string){

    try {
      const response = await axios.get(`https://api.github.com/users/${userName}`);
      const data = response.data;
      
      setError(false);
      
      const { avatar_url, name, login, location } = data;
      
      const userData: UserProps = {
        avatar_url,
        name,
        login,
        location,
      };
      
      setUser(userData);
      return;
    
    } catch (error) {
      setUser(null);
      setError(true);
      return;
    }

  };

  return (
    <Container>
      <Search loadUser={loadUser}/>
      {user && <User {...user} />}
      {error && <Error />}
    </Container>
  )
}
