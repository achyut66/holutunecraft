import React from "react";
import "../../css/marquee.css"; // Import the CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShippingFast,
    faHeart,
    faGlobe,
    faHandHoldingHeart,
    faPhone,
    faMailBulk,
} from "@fortawesome/free-solid-svg-icons";

const Marquee = () => {
    return (
        <div className="marquee-container">
            <div className="">
                <span>
                    <FontAwesomeIcon icon={faHandHoldingHeart} color="red" />{" "}
                    Family Owned Business
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faHeart} color="pink" /> Love &
                    Blessings
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faShippingFast} color="blue" /> Free
                    Shipping Worldwide For Order Upto USD 100$
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FontAwesomeIcon
                        icon={faHandHoldingHeart}
                        color="green"
                    />{" "}
                    Supporting Artisans since 2020
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faGlobe} color="purple" /> Worldwide
                    Shipping
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faPhone} color="blue" />{" "}
                    977-9851402057
                </span>
            </div>
        </div>
    );
};

export default Marquee;
