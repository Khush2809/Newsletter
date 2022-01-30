import React from "react";
import "./../Styles/styles.scss";
import google from "./../Assets/google.png";
import apple from "./../Assets/apple.png";
import footerLogo from "./../Assets/footerLogo.png";

const Footer = () => {
  return (
    <div id="footer">
      <p className="p1">Enjoying using Client’sAppName? Share the app!</p>
      <div className="buttons">
        <img src={apple} width={140} height={44}></img>
        <img src={google} width={140} height={42} className="google-img"></img>
      </div>
      <p className="p2">
        For questions, you can reach out to us at client@contact.com
      </p>
      <p className="p3">
        This email was sent to you because you downloaded the app
        Client’sAppName and were added to the mailing list. If you would like to
        stop receiving such emails, you could unsubscribe.
      </p>
      <p className="p4">Powered by NoCodeApp.Center</p>
      <div className="footer-logo">
        <img src={footerLogo} height={30} width={30}></img>
        <p>Code no app</p>
      </div>
    </div>
  );
};

export default Footer;
