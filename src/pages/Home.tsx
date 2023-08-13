import { useState } from "react";
import axios from "axios";

import Search from "../components/Search";
import { UserProps } from "../types/user";
import User from "../components/User";

export default function Home() {
  const [user, setUser] = useState<UserProps | null>(null);
  
  async function loadUser(userName: string){
    const res = await axios.get(`https://api.github.com/users/${userName}`);
    const data = await res.data;

    const { avatar_url, name, login, location } = data;

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
    </div>
  )
}
