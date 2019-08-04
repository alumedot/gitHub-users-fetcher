import axios from 'axios';

const client_id = '93b122365e6981b8050c';
const client_secret = 'c71b19b90b66baf5c5eaf20a434c6d5ff1365780';

const clientIdAndSecret = `?client_id=${client_id}&client_secret=${client_secret}`;


const gitHub = {
  async fetchUsers(number) {
    try {
      const response = await axios.get(`https://api.github.com/users?since=${number}&client_id=${client_id}&client_secret=${client_secret}`);
      let usersArr = null;
      usersArr = response.data.slice(0,10).map((user) => {
        return  user;
      });
      return usersArr;
    } catch (error) {
      return error;
    }
  },

  async fetchUser(login) {
    try {
      const response = await axios.get(`https://api.github.com/users/${login}${clientIdAndSecret}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  async fetchRepos(login) {
    try {
      const response = await axios.get(`https://api.github.com/users/${login}/repos${clientIdAndSecret}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  async fetchRepoContent(login, name) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${login}/${name}/contents/${clientIdAndSecret}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  async fetchRepoReadme(login, name) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${login}/${name}/readme${clientIdAndSecret}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
};

export default gitHub;