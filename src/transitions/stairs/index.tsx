import styles from "./style.module.scss";
import { motion, Variants } from "framer-motion";

function Stairs({ children }: { children: React.ReactNode }) {
  const noOfStairs = 5;

  const anim = (variants: Variants, i = 0) => ({
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
    custom: noOfStairs - i,
  });

  const moveDown: Variants = {
    initial: {
      y: "0",
    },
    enter: (i) => ({
      y: "100%",
      transition: {
        delay: 0.06 * i,
        duration: 0.5,
      },
      transitionEnd: {
        y: 0,
        scaleY: 0,
      },
    }),
    exit: (i) => ({
      scaleY: 1,
      transformOrigin: "top",
      transition: {
        delay: 0.06 * i,
        duration: 0.5,
      },
    }),
  };

  const overlay: Variants = {
    initial: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    enter: {
      backgroundColor: "rgba(0,0,0,0)",
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      backgroundColor: "rgba(0,0,0,0.5)",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className={styles.page}>
        {/* <motion.div
          {...anim(overlay)}
          className={styles.background}
        /> */}
        <motion.div
          className={styles.stairs}
          {...anim(overlay)}>
          {[...Array(noOfStairs)].map((_, index) => (
            <motion.div
              {...anim(moveDown, index)}
              key={index}
              className={styles.stair}
            />
          ))}
        </motion.div>

        {children}
      </div>
    </>
  );
}
export default Stairs;
