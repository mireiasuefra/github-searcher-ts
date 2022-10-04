import RepositoryItem from "../repository-item/RepositoryItem";

import { Repository } from "../../types/Repository";

import React from "react";

interface ListRepositoriesProps {
  repositories: Repository[];
  filterText: string; 
}

function ListRepositories(props: ListRepositoriesProps) {
  const renderRepositories = () => {
    const repositories = props.repositories;
    const filter = props.filterText;

    const filtered = repositories.filter((oneRepository: Repository): boolean => {
      return oneRepository.name
        .toLowerCase()
        .includes(filter.toLocaleLowerCase());
    });

    if (filtered.length > 0) {
      return filtered.map((oneRepository: Repository): JSX.Element => {
        return <RepositoryItem key={oneRepository.id} repository={oneRepository} />;
      });
    } else {
      return (
        <p className="list-repositories__not-found">
          We have not found the repository
        </p>
      );
    }
  };

  return (
    <ul>{renderRepositories()}</ul>
  );
}

export default ListRepositories;



