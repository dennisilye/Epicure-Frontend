import { useEffect, useState } from "react";
import { DishList } from "../components/DishList";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { getRestaurants } from "../store/slices/restaurantReducer";

export const Restaurants = () => {
  const [filterWord, setFilterWord] = useState("");
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getRestaurants());
  }, []);

  const handleOnFilterClick = (filterOption: string) => {
    setFilterWord(filterOption);
  };

  const restaurants = useSelector((state: RootState) => state.restaurant.value);
  if (!restaurants) return <div className="loader"></div>;
  return (
    <main className="res-page">
      <div className="res-page-title">
        <h1 className="bold">Restaurants</h1>
      </div>
      <nav className="flex justify-center">
        <ul className="filter-links flex">
          <li>
            <a
              className={!filterWord ? "active" : ""}
              onClick={() => handleOnFilterClick("")}
            >
              All
            </a>
          </li>
          <li>
            <a
              className={filterWord === "new" ? "active" : ""}
              onClick={() => handleOnFilterClick("new")}
            >
              New
            </a>
          </li>
          <li>
            <a
              className={filterWord === "popular" ? "active" : ""}
              onClick={() => handleOnFilterClick("popular")}
            >
              Most Popular
            </a>
          </li>
          <li>
            <a
              className={filterWord === "open" ? "active" : ""}
              onClick={() => handleOnFilterClick("open")}
            >
              Open Now
            </a>
          </li>
        </ul>
      </nav>
      <section className="main-res-container flex justify-center">
        <DishList
          items={
            !filterWord
              ? restaurants
              : restaurants.filter((res) =>
                  res.tags?.includes(filterWord)
                )
          }
          disableSwipe={true}
          wrap={true}
        />
      </section>
    </main>
  );
};
