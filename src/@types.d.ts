interface Restaurant {
  _id?: string;
  resName: string;
  chef: string;
  imgUrl: string;
  tags?: string[];
  dishes?: Dish[];
}
interface Dish {
  _id: string;
  resName: string;
  chef: string;
  imgUrl: string;
  dishName: string;
  price: number;
  ingredients: string;
  special?: string[];
}

interface Chef {
  _id: string;
  chef:string
  restaurants: Restaurant[];
}
