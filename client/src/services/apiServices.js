import axios from 'axios';
const services = {};

services.getUsers = (data) => {
  return axios.get('/users');
};

services.getPosts = (data) => {
  return axios.get('/posts');
};

services.newPost = (data) => {
  return axios({
    method: 'POST',
    url: '/posts',
    data: {
      content: data.content
    }
  })
};

services.deletePost = (data) => {
  return axios({
    method: 'DELETE',
    url: `/posts/${data.id}`,
    data: {
      id: data.id
    }
  })
};

export default services;
