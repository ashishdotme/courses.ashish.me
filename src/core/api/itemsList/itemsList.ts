import axios from "axios";


const ItemsListApi = () =>
  axios
    .get(
      `https://app.ashish.me/api/courses/all.json`
    )
    .then(result => {
      return result.data;
    });

export default ItemsListApi;
