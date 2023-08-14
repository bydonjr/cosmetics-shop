import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  return (
    <div className={css.container}>
      {/*Left side*/}
      <div className={css.h_sides}>
        <span className={css.text1}>skin protection cream</span>

        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoice.
          </span>
        </div>
      </div>

      {/*Middle side*/}

      <div className={css.wrapper}>

        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          className={css.blueCircle}
          transition={transition}
        ></motion.div>

        <motion.img
        transition={transition}
        initial={{ bottom: "-2rem" }}
        whileInView={{ bottom: "0rem" }}
        src={HeroImg} alt="" width={600} />

        <motion.div
        transition={transition}
        initial={{right:"4%"}}
        whileInView={{right:"2%"}}
        className={css.cart2}>
          <RiShoppingBagFill />
          <div className={css.signup}>
            <span>Best Signup Offers</span>

            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>

      {/*Right side*/}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5M</span>
          <span>Monthly Traffic</span>
        </div>

        <div className={css.customers}>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
