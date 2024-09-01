"use client";
import { Variants, motion } from "framer-motion";
import styles from "./styles.module.scss";
import { usePathname } from "../../hooks/use-pathname";

const anim = (variants: Variants) => ({
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants,
});

const paths = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
};

function Curve({ children }: { children: React.ReactNode }) {
  const { targetPathname } = usePathname();

  const text: Variants = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 0,
      transition: { duration: 1, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
      top: -100,

      transitionEnd: {
        top: "60%",
      },
    },
    exit: {
      opacity: 1,
      top: "50%",
      transition: { duration: 0.5, delay: 0.65, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <div className={`${styles.page}`}>
      <motion.p
        {...anim(text)}
        className={styles.route}>
        {paths[targetPathname as keyof typeof paths]}
      </motion.p>
      <SVG />
      {children}
    </div>
  );
}
export default Curve;

const SVG = () => {
  let width = window.innerWidth;
  width = width >= 768 ? width + width * 0.4 : width + width * 0.8;
  const height = window.innerHeight;

  const initialPath = `
  M0 300 
  Q${width / 2} 0 ${width} 300
  L${width} ${height + 300}
  Q${width / 2} ${height + 600} 0 ${height + 300}
  L0 0

`;

  const targetPath = `
  M0 300
  Q${width / 2} 0 ${width} 300
  L${width} ${height}
  Q${width / 2} ${height} 0 ${height}
  L0 0
`;

  const slideUp: Variants = {
    initial: {
      top: "-300px",
    },
    enter: {
      top: "-100vh",
      transition: { duration: 1, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
      transitionEnd: {
        top: "100vh",
      },
    },
    exit: {
      top: "-300px",
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const curve: Variants = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, delay: 0.35, ease: [0.76, 0, 0.24, 0.75] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <motion.svg {...anim(slideUp)}>
      <motion.path {...anim(curve)}></motion.path>
    </motion.svg>
  );
};
