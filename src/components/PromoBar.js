import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faBoxesPacking } from "@fortawesome/free-solid-svg-icons";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import "./PromoBar.css";

const PromoBar = () => {
  return (
    <>
      <section id="promo-bar">
        <div>
          <h1>
            <FontAwesomeIcon icon={faTruckFast} />
            <span> Quick Delivery</span>
          </h1>
        </div>
        <div>
          <h1>
            <FontAwesomeIcon icon={faBoxesPacking} />
            <span> FREE 30-day return policy</span>
          </h1>
        </div>
        <div>
          <h1>
            <FontAwesomeIcon icon={faRotate} />
            <span> Trade in your old tech</span>
          </h1>
        </div>
      </section>
    </>
  );
};

export default PromoBar;
