import React from "react";
import "./index.scss";
import { Link, useParams } from "react-router-dom";
import LoadImage from "../LoadImage";
import CommonBannerImg from "../../assets/images/Common/banner.jpg";
import {ChevronRightOutlined} from '@material-ui/icons'

const Banner = () => {
  const { name } = useParams();
  const paramsName = name.replace("-", " ");

  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${LoadImage(CommonBannerImg)})` }}
    >
      <h2 className="banner__title">{paramsName}</h2>
      <div className="banner__paths">
        <Link to='/home' className="banner__path">Home</Link>
        <ChevronRightOutlined />
        <span className="banner__path">Shop</span>
        <ChevronRightOutlined />
        <span className="banner__path active">{paramsName}</span>
      </div>
    </section>
  );
}

export default Banner;
