import React from "react";
import "./../Styles/styles.scss";

const LeftAligned = () => {
  return (
    <div id="left-aligned-container">
      <div className="date">
        <p className="month">oct</p>
        <h1 className="day">04</h1>
        <div className="hr-date"></div>
      </div>
      <div className="left-aligned-image"></div>
      <div className="left-aligned-content">
        <p className="bold-content">
          Lorem ipsum dolor sit amet, consectur adipiscing elit. Nec dolor eu
          blandit Nec dolouer eau blandit.
        </p>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec dolor eu
          blandit suspendisse non in. Risus sed proin facilisis sed eget id. Vel
          amet mauris nibh mauris. Pulvinar quis amet, porta quis gravida.
          Libero eget porttitor pulvinar elit sed vit. Libero eget porttitor
          pulvinar elit sed quisvit. Libero eget porttitor pulvinar elit sed
          quis vit.
        </p>
        <a href="" className="link">
          Get more Info
        </a>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default LeftAligned;
