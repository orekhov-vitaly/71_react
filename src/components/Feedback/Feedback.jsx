import { useState } from "react";

import "./styles.css";
import Button from "../Button/Button";

function Feedback() {
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);
    const onLikeClick = () => {setLikeCount((prevState) => ++prevState)};
    const onDislikeClick = () => {setDislikeCount((prevState) => ++prevState)};
    const onResetClick = () => {setLikeCount(0);setDislikeCount(0)};

    return(
        <div className="feedback-wrapper">
            <div className="like-container">
                <div className="like-counter">{likeCount}</div>
                <Button name="👍" onClick={onLikeClick}/>
            </div>
            <div className="dislike-container">
                <Button name="👎" onClick={onDislikeClick}/>
                <div className="dislike-counter">{dislikeCount}</div>
            </div>
            <Button name="Reset Results" onClick={onResetClick}/>
        </div>
    );
};

export default Feedback;