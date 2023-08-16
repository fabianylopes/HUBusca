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
  
  function loadUser(userName: string){
  
   const res = axios.get(`https://api.github.com/users/${userName}`)
    .then((response) => setUser(response.data))
    .catch(handleError);
   
    function handleError(){
      setUser(null);
      setError(true);
      return;
    }
    
    setError(false);
  
    const { id, avatar_url, name, login, location, followers, public_repos } = user;
    
    const userData: UserProps = {
      id,
      avatar_url,
      name,
      login,
      location,
      followers,
      public_repos
    };

    setUser(userData);
  };


  return (
    <Container>
      <Search loadUser={loadUser}/>
      {user && <User {...user} />}
      {error && <Error />}
    </Container>
  )
}
