import React from "react";
import css from "./Navbar.module.css";
import search from "../../assets/icons/magnifying-glass.png";
import account from "../../assets/icons/person_32dp_000_FILL0_wght400_GRAD0_opsz40.svg";
import bag from "../../assets/icons/shopping-bag-4-svgrepo-com.svg";
import menu from '../../assets/icons/menu_28dp_000_FILL0_wght400_GRAD0_opsz24.svg'

const Navbar = () => {
  return (
    <div className={css.background}>
      <div className={`${css.navContainer} container`}>
        <div className={css.logo}>
          <a href="#">
            PontoOlfativo<span>.</span>
          </a>
        </div>
        <div className={css.navLinks}>
          <ul className={css.links}>
            <li>
              <a href="">Fragrances</a>
            </li>
            <li>
              <a href="">Collections</a>
            </li>
            <li>
              <a href="">Brands</a>
            </li>
            <li>
              <a href="">Gift Sets</a>
            </li>
          </ul>
        </div>

        <div className={css.navIcons}>
          <ul className={css.iconsList}>
            <li>
              <a href="">
                <img
                  src={search}
                  alt="Icone de pesquisa"
                  width={28}
                  height={28}
                />
              </a>
            </li>
            <li>
              <a href="">
                <img src={bag} alt="Icone do carrinho" width={28} height={28} />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src={account}
                  alt="Icone da sua conta"
                  width={28}
                  height={28}
                />
              </a>
            </li>
            <li className={css.menuMobile}>
              <a href="">
                <img
                  src={menu}
                  alt="Icone do menu"
                  width={28}
                  height={28}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
