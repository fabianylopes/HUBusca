import { Link } from "react-router-dom";

import { UserProps } from "../../types/user";
import { MdLocationPin } from "react-icons/md";

export default function User({ avatar_url, name, login, location }: UserProps) {
  return (
    <div>
      <Link to="/">
        <img src={avatar_url} alt="profile picture" />
      </Link>
      <p>{name}</p>
      <p>{login}</p>
      <p>
        <MdLocationPin/>
        <span>{location}</span>
      </p>
    </div>
  );
}
