import React from "react";
import css from "./Collections.module.css";
import Title from "../Title/Title";
import parfum from "../../assets/elegant-floral-perfume-bottle-with-roses-and-peoni.jpg";

const Collections = () => {
  return (
    <div className={`container ${css.collections}`}>
      <Title title="Featured Collections" />
      <p className={css.text}>
        Discover our carefully curated fragrance families, each telling a unique
        olfactory story
      </p>

      <div className={css.collectionsContent}>
        <ul className={css.collectionsCards}>
          <li className={css.cardItem}>
            <div className={css.empty}></div>
            <div className={css.imgContainer}>
              <img src={parfum} alt="" />
            </div>

            <div className={css.cardContent}>
              <h3 className={css.cardTitle}>Floral Elegance</h3>
              <p className={css.cardText}>
                Delicate and sophisticated floral compositions
              </p>
              <span className={css.cardFragrances}>24 fragrances</span>
            </div>
          </li>
          <li className={css.cardItem}>
            <div className={css.empty}></div>
            <div className={css.imgContainer}>
              <img src={parfum} alt="" />
            </div>
            <div className={css.cardContent}>
              <h3 className={css.cardTitle}>Floral Elegance</h3>
              <p className={css.cardText}>
                Delicate and sophisticated floral compositions
              </p>
              <span className={css.cardFragrances}>24 fragrances</span>
            </div>
          </li>
          <li className={css.cardItem}>
            <div className={css.empty}></div>
            <div className={css.imgContainer}>
              <img src={parfum} alt="" />
            </div>
            <div className={css.cardContent}>
              <h3 className={css.cardTitle}>Floral Elegance</h3>
              <p className={css.cardText}>
                Delicate and sophisticated floral compositions
              </p>
              <span className={css.cardFragrances}>24 fragrances</span>
            </div>
          </li>
          <li className={css.cardItem}>
            <div className={css.empty}></div>
            <div className={css.imgContainer}>
              <img src={parfum} alt="" />
            </div>
            <div className={css.cardContent}>
              <h3 className={css.cardTitle}>Floral Elegance</h3>
              <p className={css.cardText}>
                Delicate and sophisticated floral compositions
              </p>
              <span className={css.cardFragrances}>24 fragrances</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Collections;
