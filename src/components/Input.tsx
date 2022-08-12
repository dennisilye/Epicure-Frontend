import { useState } from "react";
import { useSelector } from "react-redux";
import SearchIcon from "../assets/img/search-icon.svg";
import { RootState } from "../store/store";

export const Input = (props: { propClassName: string }) => {
  const [searchWord, setSearchWord] = useState("");
  const restaurants = useSelector((state: RootState) => state.restaurant.value);
  const handleOnChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(ev.target.value);
  };
  return (
    <>
      <div
        className={`input-container flex space-between align-center ${props.propClassName}`}
      >
        <img src={SearchIcon} alt="Search" title="Search" className="pointer" />
        <input
          onChange={handleOnChange}
          className="input"
          type="text"
          name=""
          id=""
          placeholder="Search for restaurant cuisine, chef"
        />
      </div>
      {searchWord && (
        <ul className="autocomplete-container">
          {restaurants
            .filter((restaurant) =>
              restaurant.resName.toLowerCase().includes(searchWord)
            )
            .map((res) => (
              <li className="autocomplete-item">{res.resName}</li>
            ))}
        </ul>
      )}
    </>
  );
};
