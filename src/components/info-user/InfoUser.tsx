import { Link } from "@primer/react";
import React from "react";
import { User } from "../../types/User";
import "./InfoUser.scss"

interface InfoUserProps {
  user: User;
}

function InfoUser(props: InfoUserProps) {
  const { avatarUrl, name, bio, linkedin, login } = props.user;

  return (
    <aside className="user">
      <section>
        <img className="user__img" src={avatarUrl} alt={`${login}'s avatar`} />
      </section>
      <section>
        <h2 className="user__name">{name}</h2>
        <h3 className="user__bio">{bio}</h3>
        <Link className="user__linkedin" href={linkedin} target="_blank">
          {linkedin}
        </Link>
      </section>
    </aside>
  );
}

export default InfoUser;
