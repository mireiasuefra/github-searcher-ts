import { User } from "./../types/User";

const getApiUser = (userName: string): Promise<User> => {
    return fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then((user) => {
        return {
          avatarUrl: user.avatar_url,
          name: user.name,
          url: user.html_url,
          bio: user.bio,
          linkedin: user.blog,
          login: user.login
        };
      });
  };
  
  export default getApiUser;
  