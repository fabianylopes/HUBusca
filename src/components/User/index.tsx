import { Link } from "react-router-dom";

import { UserProps } from "../../types/user";
import { MdLocationPin } from "react-icons/md";

import { Container, Local } from "./style";

export default function User({ avatar_url, name, login, location }: UserProps) {


  return (
    <Container>
      <Link to={`/${login}`}>
        <img src={avatar_url} alt="profile picture" />
      </Link>
      <p>{name}</p>
      <p>{login}</p>
      {location && (
      <Local>
        <MdLocationPin/>
        <span>{location}</span>
      </Local>
      )}
    </Container>
  );
}
