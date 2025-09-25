import React from "react";
import css from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`${css.heroContainer}`}>
      <div className={css.hero}>
        <div className={css.heroContent}>
          <h1 className={css.heroTitle}>Discover Your Signature Scent</h1>

          <p className={css.heroText}>
            Explore our curated collection of luxury fragrances from the world's
            most prestigious perfume houses
          </p>

          <div className={css.heroBtns}>
            <button className={css.shopCollection}>SHOP COLLECTION</button>{" "}
            <button className={css.fragranceQuiz}>FRAGRANCE QUIZ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
