import "./Header.scss";
import React from "react";
import { Header as PrimerHeader, Avatar, StyledOcticon } from "@primer/react";
import { MarkGithubIcon } from "@primer/octicons-react";
import { User } from "../../types/User";

interface HeaderProps {
  user?: User;
}

function Header(props: HeaderProps) {
  const avatarUrl = props.user ? props.user.avatarUrl : "";
  const url = props.user ? props.user.url : "";

  return (
    <PrimerHeader>
      <PrimerHeader.Item full>
        <PrimerHeader.Link href={url} sx={{fontSize: 2}}>
          <StyledOcticon icon={MarkGithubIcon} size={32} sx={{ mr: 2 }} />
          <span className="header__title">GitHub Searcher</span>
        </PrimerHeader.Link>
      </PrimerHeader.Item>
      <PrimerHeader.Item sx={{mr: 0}}>
        <Avatar src={avatarUrl} size={20} square alt="@octocat" />
      </PrimerHeader.Item>
    </PrimerHeader>
  );
}

export default Header;
