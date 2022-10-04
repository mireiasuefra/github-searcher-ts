import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import InfoUser from "./components/info-user/InfoUser";
import getApiUser from "./services/getApiUser";
import getApiRepositories from "./services/getApiRepositories";
import ListRepositories from "./components/list-repositories/ListRepositories";
import Filter from "./components/filter/Filter";
import { User } from "./types/User";
import { Repository } from "./types/Repository";

const userName = "mireiasuefra";

function App() {
  const [user, setUser] = useState<User>();
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    getApiRepositories(userName).then((response: Repository[]) => {
      setRepositories(response);
    });

    getApiUser(userName).then((response: User) => {
      setUser(response);
    });
  }, []);

  return (
    <div>
      <Header user={user} />
      <main className="main">
        {user ? <InfoUser user={user} /> : undefined}
        <section className="main__searcher">
          <Filter setFilterText={setFilterText} />
          <ListRepositories
            repositories={repositories}
            filterText={filterText}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
