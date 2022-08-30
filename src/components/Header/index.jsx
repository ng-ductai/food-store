import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { auth } from "../../configs/firebaseConfig";
import { Container, Avatar } from "@material-ui/core";
import {
  ShoppingCart,
  Home,
  RestaurantMenu,
  LibraryBooks,
  StoreMallDirectory,
  Menu,
  BookmarkBorderOutlined,
  PermContactCalendar,
  ExitToApp,
} from "@material-ui/icons";
import Dialog from "../../components/Dialog";
import HeaderMobile from "./Mobile";
import Cart from "../../components/Cart";
import Wishlist from "../../components/Wishlist";
import Logo from "../../assets/svgs/Common/logo.png";
import { setIsAtCheckout, setIsShowCart } from "../../reducers/headerSlice";
import { setIsShowWishlist } from "../../reducers/wishlistSlice";
import { moveToTop } from "../ScrollButton";

const Header = () => {
  const [isStickyTop, setIsStickyTop] = useState(false);
  const [isShowHeaderMobile, setIsShowHeaderMobile] = useState(false);
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [totalQnt, setTotalQnt] = useState(0);

  const history = useHistory();
  const dispatch = useDispatch();

  const { user, setUser } = useContext(AuthContext);
  const cartProducts = useSelector((state) => state.cart);

  const showHeaderMobile = () => {
    setIsShowHeaderMobile(!isShowHeaderMobile);
  };

  const handleBackToHome = () => {
    const action = setIsAtCheckout(false);
    history.push("/home");
    setIsAtCheckout(false);
    dispatch(action);
    moveToTop();
  };

  const handleShop = () => {
    const action = setIsAtCheckout(false);
    history.push("/shop/best-foods");
    setIsAtCheckout(false);
    dispatch(action);
    moveToTop();
  };

  const handleLogIn = () => {
    history.push("/login");
  };

  const handleLogOut = () => {
    auth.signOut().then(() => {
      setUser(false);
      history.push("/home");
      moveToTop();
    });
  };

  const toggleCart = () => {
    const action = setIsShowCart(true);
    user && dispatch(action);
    !user && setIsShowDialog(true);
  };

  const toggleWishlist = () => {
    const action = setIsShowWishlist(true);
    dispatch(action);
  };

  // handle scroll
  useEffect(() => {
    const scrollShowNav = () => {
      if (window.scrollY >= 100) {
        setIsStickyTop(true);
      } else {
        setIsStickyTop(false);
      }
    };

    window.addEventListener("scroll", scrollShowNav);
    return window.addEventListener("scroll", scrollShowNav);
  }, []);

  // handle products quanity
  useEffect(() => {
    const totalQnt = cartProducts.reduce(
      (accumulator, item) => accumulator + item.qnt,
      0
    );

    setTotalQnt(totalQnt);
  }, [cartProducts]);

  return (
    <>
      <header className={isStickyTop ? "navbar active" : "navbar"}>
        <Container>
          <div className="navbar__container">
            {/* tablet */}
            <Menu onClick={showHeaderMobile} className="menu-btn" />

            <div onClick={handleBackToHome} className="navbar__container-link">
              <img className="logo" src={Logo} alt="logo" />
            </div>

            <div className="navbar--left">
              <ul className="navbar__list">
                <li className="list-item" onClick={handleBackToHome}>
                  <Home />
                  Home
                </li>
                <li className="list-item" onClick={handleShop}>
                  <RestaurantMenu />
                  Shop
                </li>
                <li className="list-item">
                  <LibraryBooks />
                  News
                </li>
                <li className="list-item">
                  <StoreMallDirectory />
                  Stores
                </li>
              </ul>
            </div>

            <div className="navbar--right">
              {user ? (
                <div className="navbar__account">
                  <Avatar src={user.photoURL} />
                  <div className="navbar__account-username">
                    {user.displayName}
                  </div>

                  <ul className="navbar__account-options">
                    <li className="option">
                      <PermContactCalendar />
                      <span>My account</span>
                    </li>
                    <li onClick={toggleWishlist} className="option">
                      <BookmarkBorderOutlined />
                      <span>My wishlist</span>
                    </li>
                    <li onClick={handleLogOut} className="option">
                      <ExitToApp />
                      <span>Logout</span>
                    </li>
                  </ul>
                </div>
              ) : (
                <div onClick={handleLogIn} className="navbar__account">
                  <Avatar />
                  <div className="navbar__account-username signin">Sign In</div>
                </div>
              )}

              <div onClick={toggleCart} className="navbar__cart">
                <ShoppingCart />
                <div className="navbar__cart-qnt">{user ? totalQnt : 0}</div>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* mobile */}
      <HeaderMobile
        isShow={isShowHeaderMobile}
        showHeaderMobile={showHeaderMobile}
        user={user}
        handleLogOut={handleLogOut}
        handleLogIn={handleLogIn}
        handleBackToHome={handleBackToHome}
        handleShop={handleShop}
      />

      <Cart />
      <Wishlist setIsShowWishlist={setIsShowWishlist} />
      <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog} />
    </>
  );
};

export default Header;
