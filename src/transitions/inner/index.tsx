import Header from "../../components/header";
import styles from "./styles.module.scss";
import { Variants, motion } from "framer-motion";

function Inner({ children }: { children: React.ReactNode }) {
  const anim = (variants: Variants) => ({
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants: variants,
  });

  const opacity: Variants = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: { duration: 1, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    exit: { opacity: 1 },
  };

  const slide: Variants = {
    enter: { y: "100%" },
    exit: {
      y: "0",
      transition: { duration: 1, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
  };

  const perspective = {
    initial: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    enter: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        opacity: { duration: 1, type: "tween", ease: [0.76, 0, 0.24, 1] },
      },
    },
    exit: {
      y: -100,
      scale: 0.9,
      opacity: 0.5,
      transition: { duration: 1.2, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <>
      <motion.div
        className={styles.slide}
        {...anim(slide)}
        initial={false}
      />

      <motion.div className={styles.page}>
        <motion.div
          {...anim(perspective)}
          className={styles.inner}>
          <motion.div {...anim(opacity)}>
            <Header />
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
export default Inner;
