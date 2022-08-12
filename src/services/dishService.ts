import axios from "axios";

export const dishService = {
  query,
};
const API_URL = "http://ec2-35-173-248-3.compute-1.amazonaws.com/api/v1/dish";

async function query() {
  try {
    let res = await axios.get(API_URL);
    let dishes = res.data;
    console.log(dishes)
    return dishes;
  } catch (err) {
    console.log(err);
  }
}


