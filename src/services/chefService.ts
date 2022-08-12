import axios from "axios";

export const chefService = {
  query,
  getById,

};

const API_URL = "http://ec2-35-173-248-3.compute-1.amazonaws.com/api/v1/chef";

async function query() {
  try {
    const res = await axios.get(API_URL);
    const chefsToReturn = res.data;
    return chefsToReturn;
  } catch (err) {
    console.log(err);
  }
}

async function getById(resId: string) {
  try {
    const res = await axios.get(API_URL + `/${resId}`);
    const chef = res.data;
    return chef;
  } catch (err) {
    console.log(err);
  }
}

