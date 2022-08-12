import { DishList } from "../components/DishList";
import { IconBanner } from "../components/IconBanner";
import { ChefOfTheWeek } from "../components/ChefOfTheWeek";
import { MainFooter } from "../components/MainFooter";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { getDishes } from "../store/slices/dishReducer";
import { getRestaurants } from "../store/slices/restaurantReducer";
import { getChefById } from "../store/slices/chefReducer";

export const Home = () => {
  const dispatch: AppDispatch = useDispatch();

  const getAllHomepageData = () => {
    const ChefOfTheWeekId = "62861fdd7e29e8169eabb331";
    try {
      Promise.all([
        dispatch(getDishes()),
        dispatch(getRestaurants()),
        dispatch(getChefById(ChefOfTheWeekId)),
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllHomepageData();
  }, []);

  const dishes = useSelector((state: RootState) => state.dish.value);
  const restaurants = useSelector((state: RootState) => state.restaurant.value);
  const chefRes = useSelector(
    (state: RootState) => state.chef.singleChef?.restaurants
  );

  return (
    <main className="home">
      <Hero />
      <section className="flex column justify-center align-center">
        <h1 className="title popular-title">
          THE POPULAR RESTAURANTS IN EPICURE :
        </h1>
        <DishList items={restaurants} />
        <Link className="all-res-link flex end" to={"/restaurants"}>
          All Restaurants{" >>"}
        </Link>
        <h1 className="title">SIGNATURE DISH OF :</h1>
        <DishList items={dishes} />
        <IconBanner />
        <ChefOfTheWeek items={chefRes} />
      </section>
      <MainFooter />
    </main>
  );
};
