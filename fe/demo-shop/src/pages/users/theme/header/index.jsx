import { memo, useEffect, useState } from "react";
import "./style.scss";
import { Link, useLocation } from "react-router-dom";
import { formatter } from "../../../../utils/formater";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlinePhone,
  AiOutlineDownCircle,
  AiOutlineUpCircle,
  AiTwotoneMail,
} from "react-icons/ai";

import { BiUser } from "react-icons/bi";
import { ROUTERS } from "../../../../utils/router";

const Header = () => {
  const location = useLocation();

  const [isShowHamburger, setShowHamburger] = useState(false);
  const [isHome, setIsHome] = useState(location.pathname.length <= 1);
  const [isShowCategories, setIsShowCategories] = useState(isHome);
  const [menus, setMenus] = useState([
    {
      name: "Home",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Store",
      path: ROUTERS.USER.PRODUCTS,
    },
    {
      name: "Products",
      path: "",
      isShowSubmenu: false,
      child: [
        {
          name: "Meat",
          path: "",
        },
        {
          name: "vegetables",
          path: "",
        },
        {
          name: "fast food",
          path: "",
        },
      ],
    },
    {
      name: "Article",
      path: "",
    },
    {
      name: "Contact",
      path: "",
    },
  ]);

  useEffect(() => {
    const isHome = location.pathname.length <= 1;
    setIsHome(isHome);
    setIsShowCategories(isHome);
  }, [location]);

  const categories = ["Meat", "Vegetables", "Fruit juice", "Fruit", "Seafood"];
  return (
    <>
      <div
        className={`hamburger__menu__overlay ${
          isShowHamburger ? "active" : ""
        }`}
        onClick={() => setShowHamburger(false)}
      />
      <div
        className={`hamburger__menu__wrapper ${isShowHamburger ? "show" : ""}`}
      >
        <div className="header__logo">
          <h1>ND SHOP</h1>
        </div>
        <div className="hamburger__menu__cart">
          <ul>
            <li>
              <Link to="">
                <AiOutlineShoppingCart /> <span>1</span>
              </Link>
            </li>
          </ul>
          <div className="header__cart__price">
            Shopping cart : <span>{formatter(1000000)}</span>
          </div>
        </div>
        <div className="hamburger__menu__widget">
          <div className="header__top__right__auth">
            <Link to="">
              <BiUser /> Login
            </Link>
          </div>
        </div>
        <div className="hamburger__menu__nav">
          <ul>
            {menus.map((menu, menuKey) => (
              <li key={menuKey} to={menu.path}>
                <Link
                  to={menu.path}
                  onClick={() => {
                    const newMenus = [...menus];
                    newMenus[menuKey].isShowSubmenu =
                      !newMenus[menuKey].isShowSubmenu;
                    setMenus(newMenus);
                  }}
                >
                  {menu.name}
                  {menu.child &&
                    (menu.isShowSubmenu ? (
                      <AiOutlineDownCircle />
                    ) : (
                      <AiOutlineUpCircle />
                    ))}
                </Link>
                {menu.child && (
                  <ul
                    className={`header__menu__dropdown ${
                      menu.isShowSubmenu ? "show__submenu" : ""
                    }`}
                  >
                    {menu.child.map((childItem, childKey) => (
                      <li key={`${menuKey}-${childKey}`}>
                        <Link to={childItem.path}>{childItem.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="header__top__right__social">
          <Link to={""}>
            <AiOutlineFacebook />
          </Link>

          <Link to={""}>
            <AiOutlineInstagram />
          </Link>

          <Link to={""}>
            <AiOutlineLinkedin />
          </Link>

          <Link to={""}>
            <AiOutlineWhatsApp />
          </Link>

          <Link to={""}>
            <AiOutlineUser />
          </Link>
        </div>
        <div className="hamburger__menu__contact">
          <ul>
            <li>
              <AiTwotoneMail />
              duynhgcs200881@fpt.edu.vn
            </li>
            <li>Free shipping for orders from {formatter(200000)}</li>
          </ul>
        </div>
      </div>

      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-6 header_top_left">
              <ul>
                <li>
                  <AiOutlineMail />
                  duynhgcs200881@fpt.edu.vn
                </li>
                <li>Free shipping for orders from {formatter(200000)}</li>
              </ul>
            </div>

            <div className="col-6 header_top_right">
              <ul>
                <li>
                  <Link to={""}>
                    <AiOutlineFacebook />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineInstagram />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineLinkedin />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineWhatsApp />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineUser />
                  </Link>
                  <span>Login</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="header__logo">
              <h1>ND SHOP</h1>
            </div>
          </div>
          <div className="col-lg-6">
            <nav className="header__menu">
              <ul>
                {menus?.map((menu, menuKey) => (
                  <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                    <Link to={menu?.path}>{menu?.name}</Link>
                    {menu.child && (
                      <ul className="header__menu__dropdown">
                        {menu.child.map((childItem, childKey) => (
                          <li key={`${menuKey}-${childKey}`}>
                            <Link to={childItem.path}>{childItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="header__cart">
              <div className="header__cart__price">
                <span>{formatter(1000000)}</span>
              </div>
              <ul>
                <li>
                  <ink to={""}>
                    <AiOutlineShoppingCart /> <span>5</span>
                  </ink>
                </li>
              </ul>
            </div>
            <div className="hamburger__open">
              <AiOutlineMenu onClick={() => setShowHamburger(true)} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row hero__categories__container">
          <div className="col-lg-3  col-sm-12 col-xs-12 col-md-12 hero__categories">
            <div
              className="hero__categories__all "
              onClick={() => setIsShowCategories(!isShowCategories)}
            >
              <AiOutlineMenu />
              Products list
            </div>
            {/* {isShowCategories && ( */}
            <ul className={isShowCategories ? "" : "hidden"}>
              {categories.map((category, key) => (
                <li key={key}>
                  <Link to={ROUTERS.USER.PRODUCTS}>{category}</Link>
                </li>
              ))}
            </ul>
            {/* )} */}
          </div>
          <div className="col-lg-9  col-sm-12 col-xs-12 col-md-12 hero__search__container">
            <div className="hero__search">
              <div className="hero__search__form">
                <form>
                  <input type="text" placeholder="What do you want to find?" />
                  <button type="submit">Search</button>
                </form>
              </div>
              <div className="hero__search__phone">
                <div className="hero__search__phone__icon">
                  <AiOutlinePhone />
                </div>
                <div className="hero__search__phone__text">
                  <p>0365.748.674</p>
                  <span>27/7 support</span>
                </div>
              </div>
            </div>
            {isHome && (
              <div className="hero__item">
                <div className="hero__text">
                  <span>Fruit</span>
                  <h2>
                    Vegetable <br /> 100% safe and healthy
                  </h2>
                  <p>Free delivery fee</p>
                  <Link to="" className="primary-btn">
                    Buy now
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
