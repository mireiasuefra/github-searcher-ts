import { Link } from "@primer/react";
import { Repository } from "./../../types/Repository";

import React from "react";

interface RepositoryItemProps {
  repository: Repository;
}

function RepositoryItem(props: RepositoryItemProps) {
  const { name, url, description } = props.repository;

  return (
    <li className="repository">
      <Link href={url} target="_blank">
        {name}
      </Link>
      <div className="repository__description">
        {description}
      </div>
    </li>
  );
}

export default RepositoryItem;
