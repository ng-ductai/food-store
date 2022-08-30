import React, { useContext, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthContext";
import useFirestoreComments from "../../../../hooks/useFirestoreComments";
import { Avatar } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import PrimaryButton from "../../../../components/PrimaryButton";
import Dialog from "../../../../components/Dialog";

const TabUser = ({ colors, commentRef }) => {
  const [areaValue, setAreaValue] = useState("");
  const [selectedStar, setSelectedStar] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [isShowDialog, setIsShowDialog] = useState(false);
  const { id } = useParams();
  const { addToFirestore } = useFirestoreComments();
  const { user } = useContext(AuthContext);

  const handleSelectedStar = (pos) => {
    setSelectedStar(pos);
  };

  const handleHoveredStar = (pos) => {
    setHoveredStar(pos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      setIsShowDialog(true);
      return;
    }

    const date = new Date().getTime();

    if (!areaValue.trim()) return;

    addToFirestore(id, {
      uname: user.displayName,
      uphoto: user.photoURL,
      content: areaValue,
      rate: selectedStar,
      date,
    });
    setAreaValue("");
    setSelectedStar(0);

    window.scrollTo({
      top: commentRef.current.offsetTop - 200,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="user">
        <Avatar
          src={user && user.photoURL}
          className="user__avatar"
          alt="avatar"
        />

        <form onSubmit={handleSubmit} className="user__form">
          <div className="user__form-row">
            <div className="rate">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <Star
                    key={index}
                    onClick={() => handleSelectedStar(index + 1)}
                    onMouseOver={() => handleHoveredStar(index + 1)}
                    onMouseLeave={() => handleHoveredStar(0)}
                    style={{
                      fill:
                        index < (selectedStar || hoveredStar)
                          ? colors.yellow
                          : colors.blur,
                    }}
                  />
                ))}
            </div>
            <span className="msg">(Please choose an one)</span>
          </div>
          <textarea
            className="user__form-textarea"
            placeholder="Enter your review here..."
            onChange={(e) => setAreaValue(e.target.value)}
            value={areaValue}
          />
          <button type="submit">
            <PrimaryButton subClass="red user__form-submit">
              Send review
            </PrimaryButton>
          </button>
        </form>
      </div>

      <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog} />
    </>
  );
};

export default TabUser;
