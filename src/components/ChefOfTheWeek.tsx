import { DishList } from "./DishList";

export const ChefOfTheWeek = (props: { items: Restaurant[]| undefined }) => {
  if (!props.items) return <div>Loading...</div>;
  return (
    <article className="chef-container flex column align-center ">
      <h1 className="title">CHEF OF THE WEEK :</h1>
      <div className="chef-info flex">
        <img src={require("../assets/img/chef/yossi.jpg")} alt="Chef" />
        <p className="chef-description">
          Chef Yossi Shitrit has been living and breathing his culinary dreams
          for more than two decades, including running the kitchen in his first
          restaurant, the fondly-remembered Violet, located in Moshav Udim.
          Shitrit's creativity and culinary acumen born of long experience are
          expressed in the every detail of each and every dish.
        </p>
      </div>
      <section className="chef-res-container flex start column">
        <h1 className="chef-res-title">Yossi's restaurants :</h1>
        <DishList items={props.items} isMinimal={true} align={"start"} />
      </section>
    </article>
  );
};
