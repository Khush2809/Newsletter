import React from "react";
import "./../Styles/styles.scss";

const Body = () => {
  return (
    <div id="body">
      <div className="banner-img">
        <p className="banner-content">Banner Image</p>
      </div>
      <div className="body-content">
        <p className="p1">Hi there!</p>
        <p className="p2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
          ornare sagittis etiam morbi diam, feugiat cursus adipiscing.
          Pellentesque orci, tellus arcu turpis et facilisis aliquet integer.
          Justo aenean sit at sollicitudin. Donec enim, a aliquam aliquam dolor
          in quam maecenas. Neque consequat fermentum aenean arcu.Quam id
          scelerisque phasellus orci. Quam aliquet quam dolor faucibus amet sed
          malesuada.
        </p>
        <p className="p3">
          {" "}
          Neque consequat fermentum aenean arcu.Quam id scelerisque phasellus
          orci. Quam aliquet quam dolor faucibus amet sed malesuada.
        </p>
        <p className="p4">
          {" "}
          Suspendisse elit et id viverra ac imperdiet commodo in amet. Dignissim
          elementum in ornare suscipit pulvinar. Non, amet, in tellus dignissim
          turpis dolor ultrices pretium auctor. Massa sit tempor convallis
          tortor sed. In nec ut quis euismod eget suscipit. Rhoncus blandit
          tellus urna, mattis egestas massa odio nascetur congue. Massa nibh ut
          ut tellus sit fringilla ultrices suspendisse luctus.
          <p />
          <p className="p5">Best regards,</p>
          <p className="p6">Best regards, Name/Team ClientAppName</p>
        </p>
      </div>
    </div>
  );
};

export default Body;
