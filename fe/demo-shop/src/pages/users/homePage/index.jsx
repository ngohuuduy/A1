import { memo } from "react";
import Carouse from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import { formatter } from "../../../utils/formater";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";

import cat1Img from "../../../assets/users/images/categories/cat-1.jpg";
import cat2Img from "../../../assets/users/images/categories/cat-2.jpg";
import cat3Img from "../../../assets/users/images/categories/cat-3.jpg";
import cat4Img from "../../../assets/users/images/categories/cat-4.jpg";
import cat5Img from "../../../assets/users/images/categories/cat-5.jpg";
import feature1Img from "../../../assets/users/images/featured/feature-1.jpg";
import feature2Img from "../../../assets/users/images/featured/feature-2.jpg";
import feature3Img from "../../../assets/users/images/featured/feature-3.jpg";
import feature4Img from "../../../assets/users/images/featured/feature-4.jpg";
import feature5Img from "../../../assets/users/images/featured/feature-5.jpg";
import feature6Img from "../../../assets/users/images/featured/feature-6.jpg";
import feature7Img from "../../../assets/users/images/featured/feature-7.jpg";
import feature8Img from "../../../assets/users/images/featured/feature-8.jpg";
import banner1Img from "../../../assets/users/images/banner/banner-1.jpg";
import banner2Img from "../../../assets/users/images/banner/banner-2.jpg";

const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const sliderItems = [
    {
      bgImg: cat1Img,
      name: "Apple",
    },
    {
      bgImg: cat2Img,
      name: "Orange",
    },
    {
      bgImg: cat3Img,
      name: "Salmon meat",
    },
    {
      bgImg: cat4Img,
      name: "Beef",
    },
    {
      bgImg: cat5Img,
      name: "Tomato",
    },
  ];

  const featuredProducts = {
    all: {
      title: "all",
      products: [
        {
          img: feature1Img,
          name: "Beef",
          price: 200000,
        },
        {
          img: feature2Img,
          name: "Banana",
          price: 10000,
        },
        {
          img: feature3Img,
          name: "Guava",
          price: 25000,
        },
        {
          img: feature4Img,
          name: "Watermelon",
          price: 12000,
        },
        {
          img: feature5Img,
          name: "Purple grapes",
          price: 120000,
        },
        {
          img: feature6Img,
          name: "Hamburger",
          price: 30000,
        },
        {
          img: feature7Img,
          name: "Mango",
          price: 20000,
        },
        {
          img: feature8Img,
          name: "Apple",
          price: 60000,
        },
      ],
    },

    freshMeat: {
      title: "Fresh meat",
      products: [
        {
          img: feature1Img,
          name: "Beef",
          price: 200000,
        },
      ],
    },

    fruits: {
      title: "fruits",
      products: [
        {
          img: feature2Img,
          name: "Banana",
          price: 10000,
        },
        {
          img: feature3Img,
          name: "Guava",
          price: 25000,
        },
        {
          img: feature4Img,
          name: "Watermelon",
          price: 12000,
        },
        {
          img: feature5Img,
          name: "Purple grapes",
          price: 120000,
        },
        {
          img: feature7Img,
          name: "Mango",
          price: 20000,
        },
        {
          img: feature8Img,
          name: "Apple",
          price: 60000,
        },
      ],
    },

    fastFood: {
      title: "Fast food",
      products: [
        {
          img: feature6Img,
          name: "Hamburger",
          price: 30000,
        },
      ],
    },
  };

  const renderFeaturedProducts = (data) => {
    const tabList = [];
    const tabPanels = [];

    Object.keys(data).forEach((key, index) => {
      tabList.push(<Tab key={index}>{data[key].title}</Tab>);

      const tabPanel = [];
      data[key].products.forEach((item, j) => {
        tabPanel.push(
          <div className="col-lg-3 col-md-4 col-md-6 col-xs-12" key={j}>
            <div className="featured__item">
              <div
                className="featured__item__pic"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <ul className="featured__item__pic__hover">
                  <li>
                    <AiOutlineEye />
                  </li>
                  <li>
                    <AiOutlineShoppingCart />
                  </li>
                </ul>
              </div>
              <div className="feature__item__text">
                <h6>
                  <Link to="">{item.name}</Link>
                </h6>
                <h5>{formatter(item.price)}</h5>
              </div>
            </div>
          </div>
        );
      });
      tabPanels.push(tabPanel);
    });

    return (
      <Tabs>
        <TabList>{tabList}</TabList>

        {tabPanels.map((item, key) => (
          <TabPanel key={key}>
            <div className="row">{item}</div>
          </TabPanel>
        ))}
      </Tabs>
    );
  };

  return (
    <>
      {/* Categories Begin */}
      <div className="categories_section">
        <div className="container">
          <Carouse responsive={responsive} className="categories_slider">
            {sliderItems.map((item, key) => (
              <div
                className="categories_slider_item"
                style={{ backgroundImage: `url(${item.bgImg})` }}
                key={key}
              >
                <p>{item.name}</p>
              </div>
            ))}
          </Carouse>
        </div>
      </div>
      {/* Categories End */}
      {/* Featured Begin  */}
      <div className="container">
        <div className="featured">
          <div className="section_title">
            <h2>Outstanding products</h2>
          </div>
          {renderFeaturedProducts(featuredProducts)}
        </div>
      </div>
      {/* Featured End */}
      {/* Baner Begin  */}
      <div className="container">
        <div className="banner">
          <div className="banner__pic">
            <img src={banner1Img} alt="banner" />
          </div>
          <div className="banner__pic">
            <img src={banner2Img} alt="banner" />
          </div>
        </div>
      </div>
      {/* Banner End */}
    </>
  );
};

export default memo(HomePage);
