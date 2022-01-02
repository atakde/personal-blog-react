import axios from "axios";

export const getPostsFromServer = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.data.splice(0, 5);
    })
    .catch((error) => {
      console.log(error);
    });
};
