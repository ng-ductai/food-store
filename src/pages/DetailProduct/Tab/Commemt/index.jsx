import React, { useRef } from "react";
import "./index.scss";
import { PRIMARY_YELLOW_COLOR } from "../../../../constants";
import useFirestoreComments from "../../../../hooks/useFirestoreComments";
import TimeAgo from "react-timeago";
import { Avatar } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import TabUser from "../User";

const TabComment = () => {
  const ref = useRef(null);
  const { comments } = useFirestoreComments();

  const colors = {
    yellow: PRIMARY_YELLOW_COLOR,
    blur: "#FDDA81",
  };

  return (
    <div className="detail-tab__comment">
      <div ref={ref} className="comment__container">
        {comments.map(({ uname, uphoto, content, rate, date }, index) => (
          <div key={index} className="comment__customer">
            <Avatar
              className="comment__customer-avatar"
              src={uphoto}
              alt="Avatar"
            />
            <div className="comment__wrapper">
              <div className="comment__wrapper-row">
                <h4 className="name">{uname}</h4>
                <TimeAgo className="date" date={date} minPeriod={60} />
              </div>
              <div className="comment__wrapper-stars">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <Star
                      key={index}
                      style={{
                        fill: index < rate ? colors.yellow : colors.blur,
                      }}
                    />
                  ))}
              </div>
              <p className="comment__wrapper-content">{content}</p>
            </div>
          </div>
        ))}
      </div>

      <TabUser colors={colors} commentRef={ref} />
    </div>
  );
};

export default TabComment;
