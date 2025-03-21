import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer__about">
              <div className="footer__about__logo">
                <h1>ND SHOP</h1>
              </div>
              <ul>
                <li>
                  Address: Xom cay xanh - Thuan Giao - Thuan An - Binh Duong
                </li>
                <li>Phone: 0365748674</li>
                <li>Email: duynhgcs200881@fpt.edu.vn</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer__widget">
              <h6>Store</h6>
              <ul>
                <li>
                  <Link to="">Contact</Link>
                </li>
                <li>
                  <Link to="">Information about us</Link>
                </li>
                <li>
                  <Link to="">Business products</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="">Account information</Link>
                </li>
                <li>
                  <Link to="">shopping cart</Link>
                </li>
                <li>
                  <Link to="">Favorites list</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer__widget">
              <h6>Promotions and offers</h6>
              <b>Sign up for advice here</b>
              <form action="#">
                <div>
                  <input type="text" placeholder="Enter email" />
                  <button type="submit" className="button-submit">
                    Register
                  </button>
                </div>
                <div className="footer__widget__social">
                  <div>
                    <AiOutlineFacebook />
                  </div>
                  <div>
                    <AiOutlineInstagram />
                  </div>
                  <div>
                    <AiOutlineLinkedin />
                  </div>
                  <div>
                    <AiOutlineWhatsApp />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
