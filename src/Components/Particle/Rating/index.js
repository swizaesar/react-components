import React from "react";
import styled from "styled-components";

const RatingStyle = styled.div`
    text-align: ${(props) => props.align};
    i {
        font-size: ${(props) => props.size};
    }
    span {
        font-size: 12px;
    }
    ${({ ratingStars }) =>
        ratingStars === true &&
        `
        text-align: ${(props) => props.align};
        &:hover > i:before {
            color: gold;
            cursor: pointer;
        }

        > i:hover ~ i:before {
            color: #bbc0d5;
            cursor: pointer;
        }
    `}
`;

const Rating = ({
    onGetValue = () => {},
    ratingStars = "",
    align = "left",
    size = "14px",
    rating = 0,
    totalStars = 5,
    activeColor = "#ffc400",
    inActiveColor = "#bbc0d5",
    textColor = "text-black-50",
}) => {
    return (
        <RatingStyle align={align} size={size} ratingStars={ratingStars}>
            {[...Array(totalStars)].map((el, i) =>
                i < Math.floor(rating) ? (
                    <i
                        value={i + 1}
                        onClick={() => onGetValue({ rating: i + 1 })}
                        key={i}
                        className="fa fa-star"
                        style={{ color: activeColor }}
                    ></i>
                ) : (
                    <i
                        value={i + 1}
                        onClick={() => onGetValue({ rating: i + 1 })}
                        key={i}
                        className="fa  fa-star"
                        style={{ color: inActiveColor }}
                    ></i>
                )
            )}
            {textColor && (
                <span className={String(textColor)}>{` (${rating})`}</span>
            )}
        </RatingStyle>
    );
};

export default Rating;
