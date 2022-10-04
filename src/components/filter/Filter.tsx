import { TextInput } from "@primer/react";
import { SearchIcon } from "@primer/octicons-react";
import React from "react";

interface FilterProps {
  setFilterText: React.Dispatch<React.SetStateAction<string>>;
}

function Filter(props: FilterProps) {
  const handleFilterText = (ev: React.FormEvent<HTMLInputElement>) => {
    const inputText = ev.currentTarget.value;
    props.setFilterText(inputText);
  };

  return (
    <form>
      <TextInput
        block
        aria-label="Input to find a repository"
        trailingVisual={SearchIcon}
        name="name"
        placeholder="Find a repository..."
        onChange={handleFilterText}
      />
    </form>
  );
}

export default Filter;
