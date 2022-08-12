import { DishPreview } from "./DishPreview";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { DishModal } from "./DishModal";
import React, { useState } from "react";
export const DishList = (props: {
  items: Restaurant[] | Dish[];
  isMinimal?: boolean;
  align?: string;
  disableSwipe?: boolean;
  wrap?: boolean;
}) => {
  const [isDishModalOpen, setIsDishModalOpen] = useState(false);
  const [dishToAdd, setDishToAdd] = useState<Dish | null>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  // Dish to show in the modal
  const setCurrDish = (dish: Dish) => {
    setDishToAdd(dish);
    setIsDishModalOpen(true);
  };

  const onCloseModal = () => {
    setIsDishModalOpen(false);
  };

  // Set space between the cards
  const setSpaceBetween = (): number => {
    if (isMobile) {
      console.log(props.items)
      if (props.items && "price" in props.items[0]) return 70;
      else if (props.isMinimal) return -120;
      else return -20;
    }
    return 10;
  };
  if (!props.items || !props.items.length) return <div className="loader"></div>;

  return (
    <React.Fragment>
      {isDishModalOpen && (
        <DishModal dish={dishToAdd} onCloseModal={onCloseModal} />
      )}
      {/* Determine which style the card should have */}
      <section
        className={`dish-list flex ${props.wrap ? "wrap res-page-list" : ""} ${
          !isMobile && props.align ? "chef-res-list" : ""
        } ${isMobile && props.align ? "small-chef-list" : ""}`}
        style={{ justifyContent: props?.align }}
      >
        {/* Determine if card list will be swipe able*/}
        {!props.disableSwipe ? (
          <Swiper
            loop={true}
            spaceBetween={setSpaceBetween()}
            slidesPerView={isMobile ? 1.7 : 3}
          >
            {props.items.map((item: Restaurant | Dish) => (
              <SwiperSlide key={item._id + item.resName}>
                <DishPreview
                  data={item}
                  isMinimal={props.isMinimal}
                  setCurrDish={setCurrDish}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          props.items.map((item: Restaurant | Dish) => (
            <DishPreview
              key={item._id}
              data={item}
              isMinimal={props.isMinimal}
              setCurrDish={setCurrDish}
            />
          ))
        )}
      </section>
    </React.Fragment>
  );
};
