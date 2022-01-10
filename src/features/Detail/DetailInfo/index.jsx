import React, { useContext, useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import useFirestoreProducts from "../../../hooks/useFirestoreProducts";
import { AuthContext } from "../../../contexts/AuthContext";
import DetailContent from "./DetailContent";

const dataOptions = [
  {
    content: "Buy 2 get 5% off",
    percentOff: 5,
  },
  {
    content: "Buy 5 get 10% off",
    percentOff: 10,
  },
  {
    content: "Buy 10 get 20% off",
    percentOff: 20,
  },
];

const DetailMain = (props) => {
  const { product } = props;
  const { price } = product || 0;

  const [fixedPrice, setFixedPrice] = useState(price);
  const [prevId, setPrevId] = useState("");
  const [qnt, setQnt] = useState(1);
  const [selectedRadio, setSelectedRadio] = useState("");

  const params = useParams();
  const { id } = params;
  const paramsName = params.name.replace("-", " ");

  const { addToFirestore } = useFirestoreProducts();
  const { user } = useContext(AuthContext) ?? "";

  const handleFuncs = {
    handleOptionChange: (e, percentOff) => {
      switch (percentOff) {
        case 5:
          setQnt(2);
          break;
        case 10:
          setQnt(5);
          break;
        case 20:
          setQnt(10);
          break;
        default:
          return price;
      }

      setSelectedRadio(e.target.value);
    },
    handleDecreaseQnt: () => {
      qnt > 1 && setQnt(qnt - 1);
    },
    handleIncreaseQnt: () => {
      setQnt(qnt + 1);
    },
  };

  // whenever change product then reset price
  useLayoutEffect(() => {
    if (id !== prevId) {
      setQnt(1);
      setFixedPrice(price || 0 * qnt);
      setSelectedRadio(null);
    } else if (qnt >= 10) {
      setFixedPrice((price * qnt - price * qnt * 0.2).toFixed(2));
      setSelectedRadio("Buy 10 get 20% off");
    } else if (qnt >= 5 && qnt < 10) {
      setFixedPrice((price * qnt * 0.9).toFixed(2));
      setSelectedRadio("Buy 5 get 10% off");
    } else if (qnt >= 2 && qnt < 5) {
      setFixedPrice((price * qnt * 0.95).toFixed(2));
      setSelectedRadio("Buy 2 get 5% off");
    } else {
      setFixedPrice(((price || 0) * 1).toFixed(2));
      setSelectedRadio(null);
    }
    setPrevId(id);
  }, [price, qnt, id, prevId]);

  const handleAddToFirestore = (type, product) => {
    if (!product || !user.uid) return;
    const info = { type, productInfo: { ...product, qnt: qnt } };
    addToFirestore(user.uid, info);
  };

  return (
    <DetailContent
      paramsName={paramsName}
      dataOptions={dataOptions}
      handleFuncs={handleFuncs}
      selectedRadio={selectedRadio}
      product={product}
      price={fixedPrice || price}
      qnt={qnt}
      handleAddToFirestore={handleAddToFirestore}
    />
  );
};

export default DetailMain;
