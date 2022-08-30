import React from "react";
import "./index.scss";
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
import { setIsShowWishlist } from "../../../reducers/wishlistSlice";

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
    <div className="mobile">
      <div className={isShow ? "mobile__content active" : "mobile__content"}>
        <div className="mobile__top">
          <div onClick={onHandleLogIn} className="mobile__top-account">
            <Avatar src={user?.photoURL} className="icon" />
            <div className="username">{user?.displayName ?? "Sign In"}</div>
          </div>
          <div className="mobile__top-close" onClick={showHeaderMobile}>
            <CloseOutlined />
          </div>
        </div>

        <ul className="mobile__list" onClick={showHeaderMobile}>
          <div onClick={handleBackToHome} className="mobile__list-item">
            <Home />
            Home
          </div>
          <div onClick={handleShop} className="mobile__list-item">
            <RestaurantMenu /> Shop
          </div>
          <li className="mobile__list-item">
            <LibraryBooks /> News
          </li>
          <li className="mobile__list-item">
            <StoreMallDirectory /> Stores
          </li>
        </ul>

        <div className="mobile__list" onClick={showHeaderMobile}>
          <div onClick={openWishlist} className="mobile__list-favourite">
            <BookmarkBorderOutlined />
            <span>Your wishlist</span>
          </div>
          {user && (
            <div onClick={handleLogOut} className="mobile__list-logout">
              <ExitToApp />
              <span>Log Out</span>
            </div>
          )}
        </div>
      </div>

      <span
        className={isShow ? "mobile__overlay active" : "mobile__overlay"}
        onClick={showHeaderMobile}
      />
    </div>
  );
};

export default HeaderMobile;
