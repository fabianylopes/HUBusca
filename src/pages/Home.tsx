import { useState } from "react";
import axios from "axios";

import Search from "../components/Search";
import { UserProps } from "../types/user";
import User from "../components/User";
import Error from "../components/Error";

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
  
    const { avatar_url, name, login, location } = user;
    
    const userData: UserProps = {
      avatar_url,
      name,
      login,
      location,
    };

    setUser(userData);

  };

  return (
    <div>
      <Search loadUser={loadUser}/>
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  )
}
