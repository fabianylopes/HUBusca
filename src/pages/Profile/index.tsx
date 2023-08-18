import { useParams } from "react-router-dom";
import axios from "axios";

import { UserProps } from "../../types/user";

import { Container, Local } from "./style";
import { useEffect, useState } from "react";
import { MdLocationPin } from "react-icons/md";

export default function Profile() {
    const { userLogin } = useParams();

    const [user, setUser] = useState<UserProps | null>(null);
    const [repos, setRepos] = useState([]);
    const [showRepos, setShowRepos] = useState(false);
    
    useEffect(() => {
        async function loadProfile() {
          try {
            const response = await axios.get(`https://api.github.com/users/${userLogin}`);
            const data = response.data;
    
            const { id, avatar_url, name, login, location, followers, public_repos } = data;
    
            const userData: UserProps = {
              id,
              avatar_url,
              name,
              login,
              location,
              followers,
              public_repos,
            };
    
            setUser(userData);
          } catch (error) {
            setUser(null);
          }
        }

        async function loadRepos() {
            try {
                const response = await axios.get(`https://api.github.com/users/${userLogin}/repos`);
                const data = response.data;

                setRepos(data);
            } catch (error) {
              console.error(error);
            }
          }
    
        loadProfile();
        loadRepos();
        
      }, [userLogin]);
    
      if (!user) {
        return <div>Loading...</div>;
      }

    return (
        <Container>
            <img src={user.avatar_url} alt="profile picture" />
            <p>ID: {user.id}</p>
            <p>Nome: {user.name}</p>
            <p>Login: {user.login}</p>
            {user.location && 
            <Local>
                <MdLocationPin/>
                <span>{user.location}</span>
            </Local>
            }
            <p>Seguidores: {user.followers}</p>
            <p onClick={() => setShowRepos(!showRepos) }>Repositórios: {user.public_repos}</p>
            {showRepos && (
                <ul>
                {repos.map((repo: { id: number; name: string; html_url: string }) => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank">
                            {repo.name}
                        </a>
                    </li>
                ))}
                </ul>
      )}
        </Container>
    );
}

