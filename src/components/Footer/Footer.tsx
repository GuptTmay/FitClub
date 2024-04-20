import "./Footer.css";
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";
import twitter from "../../assets/twitter.png";
import { motion } from "framer-motion";

const Footer = () => {
  const transition = { type: "spring", duration: 2 };
  return (
    <div className="footerContainer">
      <hr />
      <div className="footer">
        <div className="social-media-links">
          <motion.img
            transition={{ ...transition, duration: "100ms" }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.7 }}
            src={github}
            alt="github"
          />
          <motion.img
            transition={{ ...transition, duration: "100ms" }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.7 }}
            src={instagram}
            alt="instragram"
          />
          <motion.img
            transition={{ ...transition, duration: "100ms" }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.7 }}
            src={twitter}
            alt="twitter"
          />
          <motion.img
            transition={{ ...transition, duration: "100ms" }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.7 }}
            src={linkedin}
            alt="linkedin"
          />
        </div>
        <div>
          <img src={logo} alt="brand logo" />
        </div>
      </div>
      <div className="myBlur footer-blur-1"></div>
      <div className="myBlur footer-blur-2"></div>
    </div>
  );
};

export default Footer;
