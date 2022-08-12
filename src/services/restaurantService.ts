import axios from "axios";

export const restaurantService = {
  query,
  getById,
 
};

const API_URL = "http://ec2-35-173-248-3.compute-1.amazonaws.com/api/v1/restaurant";

async function query() {
  try {
    const res = await axios.get(API_URL);
    const restaurantsToReturn = res.data;
    return restaurantsToReturn;
  } catch (err) {
    console.log(err);
  }
}

async function getById(resId: string | undefined) {
  try {
    const res = await axios.get(API_URL + `/${resId}`);
    const restaurant = res.data;
    return restaurant;
  } catch (err) {
    console.log(err);
  }
}

