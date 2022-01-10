import React from "react";
import "./HeaderMobile.scss";
import { useDispatch } from "react-redux";
import { Avatar } from "@material-ui/core";
import {
  Home,
  RestaurantMenu,
  LibraryBooks,
  StoreMallDirectory,
  BookmarkBorderOutlined,
  ExitToApp,
  CloseOutlined,
} from "@material-ui/icons";
import { setIsShowWishlist } from "../../app/reducers/wishlistSlice";

const HeaderMobile = (props) => {
  const {
    user,
    isShow,
    showHeaderMobile,
    handleLogOut,
    handleLogIn,
    handleShop,
    handleBackToHome,
  } = props;
  const dispatch = useDispatch();

  const openWishlist = () => {
    const action = setIsShowWishlist(true);
    dispatch(action);
  };

  const onHandleLogIn = () => {
    if (!user) {
      handleLogIn();
      showHeaderMobile();
    }
  };

  return (
    <div className="mobile-nav">
      <div
        className={
          isShow ? "mobile-nav__content active" : "mobile-nav__content"
        }
      >
        <div className="mobile-nav__top">
          <div onClick={onHandleLogIn} className="mobile-nav__account">
            <Avatar src={user?.photoURL} className="mobile-nav__icon" />
            <div className="mobile-nav__username">
              {user?.displayName ?? "Sign In"}
            </div>
          </div>
          <div className="mobile-nav__close" onClick={showHeaderMobile}>
            <CloseOutlined />
          </div>
        </div>

        <ul className="mobile-nav__list" onClick={showHeaderMobile}>
          <div onClick={handleBackToHome} className="mobile-nav__item">
            <Home />
            Home
          </div>
          <div onClick={handleShop} className="mobile-nav__item">
            <RestaurantMenu /> Order online
          </div>
          <li className="mobile-nav__item">
            <LibraryBooks /> News
          </li>
          <li className="mobile-nav__item">
            <StoreMallDirectory /> Store locations
          </li>
        </ul>

        <div className="mobile-nav__list" onClick={showHeaderMobile}>
          <div onClick={openWishlist} className="mobile-nav__favourite">
            <BookmarkBorderOutlined />
            <span>Your wishlist</span>
          </div>
          {user && (
            <div onClick={handleLogOut} className="mobile-nav__logout">
              <ExitToApp />
              <span>Log Out</span>
            </div>
          )}
        </div>
      </div>

      <span
        className={
          isShow ? "mobile-nav__overlay active" : "mobile-nav__overlay"
        }
        onClick={showHeaderMobile}
      />
    </div>
  );
};

export default HeaderMobile;
