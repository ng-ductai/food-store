import React, { useContext, useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import useFirestoreProducts from "../../../hooks/useFirestoreProducts";
import { AuthContext } from "../../../contexts/AuthContext";
import DetailInfo from "./DetailInfo";
import { dataOptions } from "../../../constants";

const DetailMain = (props) => {
  const { product } = props;
  const { price } = product || 0;
  const [prevId, setPrevId] = useState("");
  const [qnt, setQnt] = useState(1);
  const [selectedRadio, setSelectedRadio] = useState("");
  const params = useParams();
  const { id } = params;
  const paramsName = params.name.replace("-", " ");
  const products = { ...product, paramsName };
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

  useLayoutEffect(() => {
    if (id !== prevId) {
      setQnt(1);
      setSelectedRadio(null);
    } else if (qnt >= 10) {
      setSelectedRadio("Buy 10 get 20% off");
    } else if (qnt >= 5 && qnt < 10) {
      setSelectedRadio("Buy 5 get 10% off");
    } else if (qnt >= 2 && qnt < 5) {
      setSelectedRadio("Buy 2 get 5% off");
    } else {
      setSelectedRadio(null);
    }
    setPrevId(id);
  }, [id, prevId, qnt]);

  const handleAddToFirestore = (type, product) => {
    if (!product || !user.uid) return;
    const info = {
      type,
      productInfo: { ...product, qnt: qnt },
    };
    addToFirestore(user.uid, info);
  };

  return (
    <DetailInfo
      paramsName={paramsName}
      dataOptions={dataOptions}
      handleFuncs={handleFuncs}
      selectedRadio={selectedRadio}
      product={products}
      qnt={qnt}
      handleAddToFirestore={handleAddToFirestore}
    />
  );
};

export default DetailMain;
