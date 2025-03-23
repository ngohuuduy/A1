import { memo, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
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
} from "react-icons/ai";
import { ROUTERS } from "../../../../utils/router";

const Header = () => {
  const [isShowCategories, setShowCategories] = useState(true);
  const [menus] = useState([
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
  return (
    <>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-6 header_top_left">
              <ul>
                <li>
                  <AiOutlineMail />
                  Hello@gmail.com
                </li>
                <li>Free ship {formatter(200000)}</li>
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
          <div className="col-lg-3 col-xl-3">
            <div className="header__logo">
              <h1>ND SHOP</h1>
            </div>
          </div>
          <div className="col-lg-3 col-xl-6">
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
          <div className="col-lg-3 col-xl-3">
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
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row hero__categories__container">
          <div className="col-lg-3 hero__categories">
            <div
              className="hero__categories__all "
              onClick={() => setShowCategories(!isShowCategories)}
            >
              <AiOutlineMenu />
              Products list
            </div>
            {/* {isShowCategories && ( */}
            <ul className={isShowCategories ? "" : "hidden"}>
              <li>
                <Link to={""}>Meat</Link>
              </li>
              <li>
                <Link to={""}>Vegetables</Link>
              </li>
              <li>
                <Link to={""}>Fruit juice</Link>
              </li>
              <li>
                <Link to={""}>Fruit</Link>
              </li>
              <li>
                <Link to={""}>Seafood</Link>
              </li>
            </ul>
            {/* )} */}
          </div>
          <div className="col-lg-9 hero__search__container">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
