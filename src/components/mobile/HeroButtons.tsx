import { useNavigate } from "react-router-dom";

export const HeroButtons = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-buttons-container flex justify-center align-center">
      <button className="hero-btn">CHEFS</button>
      <button className="hero-btn" onClick={() => navigate("/restaurants")}>
        RESTAURANTS
      </button>
    </div>
  );
};
