import React from "react";
import { PRIMARY_WHITE_COLOR } from "../../constants";
import {
  PHONE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from "../../constants";
import LoadImage from "../LoadImage";
import styled from "styled-components";

const EmptyContainer = styled.div`
  position: ${(p) => p.type === "shop" && "absolute"};
  left: ${(p) => p.type === "shop" && 0};
  right: ${(p) => p.type === "shop" && 0};
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(p) => (p.type === "shop" || p.type === "wishlist") && "60%"};
  margin-top: ${(p) => p.type === "shop" && "30px"};
  margin-bottom: ${(p) => (p.type === "wishlist" ? "0" : "40px")};

  img {
    width: ${(p) =>
      p.type === "shop"
        ? "24rem"
        : p.type === "wishlist"
        ? "15rem"
        : "20rem"};
    margin-bottom: ${(p) => (p.type === "wishlist" ? "25px" : "35px")};

    @media (max-width: ${TABLET_BREAKPOINT}px) {
      width: ${(p) => p.type === "wishlist" && "25rem"};
      margin-bottom: ${(p) => p.type === "wishlist" && "30px"};
    }

    @media (max-width: ${PHONE_BREAKPOINT}px) {
      width: 15rem;
      margin-bottom: 20px;
    }
  }

  h2 {
    font-size: ${(p) => (p.type === "wishlist" ? "1.8rem" : "2.2rem")};
    color: ${(p) => p.type === "checkout" && PRIMARY_WHITE_COLOR};

    @media (max-width: ${TABLET_BREAKPOINT}px) {
      font-size: ${(p) => p.type === "wishlist" && "2rem"};
    }

    @media (max-width: ${PHONE_BREAKPOINT}px) {
      font-size: 1.8rem;
    }
  }
`;

const Empty = (props) => {
  const { src, type } = props;

  return (
    <EmptyContainer type={type}>
      <img src={LoadImage(src)} alt="Empty" />
      <h2>Your {type === "wishlist" ? "wishlist" : "cart"} is empty...</h2>
    </EmptyContainer>
  );
};

export default Empty;
