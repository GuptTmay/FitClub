import { useEffect, useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import RightArrow from "../../assets/rightArrow.png";
import LeftArrow from "../../assets/leftArrow.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  const transition = { type: "spring", duration: 3 };
  const [userIndex, setUserIndex] = useState(0);
  const [userData, setUserData] = useState(testimonialsData[userIndex]);

  useEffect(() => {
    let size = testimonialsData.length;
    setUserData(testimonialsData[Math.abs(userIndex) % size]);
  }, [userIndex]);

  return (
    <div className="testimonials" id="Testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What They</span>
        <span>Say about us</span>
        <motion.span 
          key={userIndex}
          initial={{opacity: 0, x: -100}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: 100}}
          transition={transition}
        >{userData.review}</motion.span>
        <span>
          <span>{userData.name}</span>
          <span> - {userData.status}</span>
        </span>
      </div>

      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>

        <motion.img
          key={userIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={userData.image}
          alt="customerImage"
        />

        <div className="navigationBar">
          <img
            src={LeftArrow}
            alt="leftArrow"
            onClick={() => setUserIndex((x) => x - 1)}
          />
          <img
            src={RightArrow}
            alt="rightArrow"
            onClick={() => setUserIndex((x) => x + 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
