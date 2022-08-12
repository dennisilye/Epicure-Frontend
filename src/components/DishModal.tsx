import React, { useState } from "react";

export const DishModal = (props: {
  dish: Dish | null;
  onCloseModal: () => void;
}) => {
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [side, setSide] = useState("");
  const [changes, setChanges] = useState<string[]>([]);
  const handleChangeQuantity = (n: number) => {
    setOrderQuantity((state) => (state += n));
  };

  const handleFormSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    console.log(
      `${orderQuantity} ${props.dish?.dishName} have been added to your bag.`
    );
    props.onCloseModal();
  };

  if (!props.dish) return <div></div>;
  return (
    <main className="dish-modal-container flex column">
      <div className="modal-header flex">
        <button onClick={props.onCloseModal}>X</button>
      </div>
      <section className="dish-modal flex column align-center">
        <img src={props.dish.imgUrl} alt="" />
        <h1 className="bold">{props.dish.dishName}</h1>
        <p>{props.dish.ingredients}</p>
        <div>
          {props.dish.special &&
            props.dish.special.map((special) => (
              <img
                key={special}
                className="special-icon"
                src={`/imgs/special-icon/${special}-icon.svg`}
                alt="special"
              />
            ))}
        </div>
        <div className="line-container flex justify-center align-center">
          <div className="card-line"></div>
          <span className="bold">₪{props.dish.price}</span>
          <div className="card-line"></div>
        </div>
        <form className="flex column" onSubmit={handleFormSubmit}>
          <h2 className="modal-title">Choose a side</h2>
          <div className="modal-btn-container flex align-center">
            <input type="radio" name="radio" id="" />
            <label htmlFor="">White Bread</label>
          </div>
          <div className="modal-btn-container flex align-center">
            <input type="radio" name="radio" id="" />
            <label htmlFor="">Sticky Bread</label>
          </div>
          <h2 className="modal-title">Changes</h2>
          <div className="modal-btn-container flex align-center">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Without Peanuts</label>
          </div>
          <div className="modal-btn-container flex align-center">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Less Spicy</label>
          </div>
          <h2 className="modal-title">Quantity</h2>
          <div className="quantity-container flex align-center justify-center">
            <button
              disabled={orderQuantity <= 1}
              type="button"
              onClick={() => handleChangeQuantity(-1)}
            >
              -
            </button>
            <span>{orderQuantity}</span>
            <button type="button" onClick={() => handleChangeQuantity(1)}>
              +
            </button>
          </div>
          <button className="modal-btn" type="submit">
            ADD TO BAG
          </button>
        </form>
      </section>
    </main>
  );
};
