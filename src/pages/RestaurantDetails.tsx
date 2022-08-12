import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DishList } from "../components/DishList";
import { restaurantService } from "../services/restaurantService";

export const RestaurantDetails = () => {
  const { resId } = useParams();
  const [filterWord, setFilterWord] = useState("");
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

  const handleOnFilterClick = (filterOption: string) => {
    setFilterWord(filterOption);
  };

  const getRestaurant = async () => {
    if (resId) {
      let tempRestaurant = await restaurantService.getById(resId);
      console.log(tempRestaurant);
      
      setRestaurant(tempRestaurant);
    }
  };

  useEffect(() => {
    getRestaurant();
    window.scrollTo(0, 0);
  }, []);

  if (!restaurant) return <div className="loader"></div>;

  return (
    <main className="res-details">
      <img
        className="res-details-img"
        src={restaurant.imgUrl}
        alt="restaurant"
      />
      <div className="details-subtitle flex column justify-center align-center">
        <h1 className="bold">{restaurant.resName}</h1>
        <h2>{restaurant.chef}</h2>
        <div className="open-container flex align-center justify-center">
          <img src="/imgs/rare-icons/clock-icon.svg" alt="" />
          <p>Open now</p>
        </div>
      </div>
      <div className="details-filter flex justify-center align-center">
        <a
          onClick={() => handleOnFilterClick("")}
          className={!filterWord ? "active" : ""}
        >
          Breakfast
        </a>
        <a
          onClick={() => handleOnFilterClick("lunch")}
          className={filterWord === "lunch" ? "active" : ""}
        >
          Lunch
        </a>
        <a
          onClick={() => handleOnFilterClick("dinner")}
          className={filterWord === "dinner" ? "active" : ""}
        >
          Dinner
        </a>
      </div>
      {restaurant.dishes ? (
        <section className="details-list flex justify-center align-center">
          <DishList items={restaurant.dishes} wrap={true} disableSwipe={true} />
        </section>
      ) : (
        <div>No Dishes available yet.</div>
      )}
    </main>
  );
};
