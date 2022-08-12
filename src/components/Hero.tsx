import { Filter } from "./Filter";
import { HeroButtons } from "./mobile/HeroButtons";

export const Hero = () => {
  return (
    <>
      <div className="hero full">
        <Filter />
      </div>
      {/* HeroButtons only in mobile  */}
      <HeroButtons />
    </>
  );
};
