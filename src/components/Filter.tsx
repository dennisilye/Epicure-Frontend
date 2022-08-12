import { Input } from "./Input";

export const Filter = () => {
  return (
    <section className="filter-container">
      <div>
        <div className="text-container">
          <h1 className="block">Epicure works with the top</h1>
          <h1 className="block">chef restaurants in Tel Aviv</h1>
        </div>
        <Input propClassName={"hero-search"} />
      </div>
    </section>
  );
};
