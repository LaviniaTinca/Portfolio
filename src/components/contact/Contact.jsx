import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "./contact.scss";

const Contact = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [controls, inView]);

  const boxVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      delay: 1,
      duration: 5,
      ease: "easeInOut",
      staggerChildren: 0.8,
    },
  };

  const textVariants = {
    initial: {
      // y: -500,

      opacity: 0,
      scale: 0,
    },
    animate: {
      // y: 0,
      opacity: 1,
      scale: 1,
      // transition: {
      //   duration: 1,
      //   staggerChildren: 0.3,
      // },
      transition: {
        delay: 0.2,
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className="contact ">
      <div
        style={{
          width: 800,
          height: 800,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            fill="none"
            strokeWidth="0.2"
            stroke="#c6ad8f"
            d="M 10,10 L 190,10 L 190,190 L 10,190 Z"
            initial={{ strokeDasharray: 200, strokeDashoffset: 201 }}
            animate={{
              strokeDashoffset: [1600, 0],
            }}
            transition={{
              duration: 32,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        </svg>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        >
          <motion.div
            className="flex"
            ref={ref}
            variants={boxVariants}
            initial="initial"
            animate={controls}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: "easeInOut",
              staggerChildren: 0.2,
            }}
          >
            <h2 className="">Let&apos;s work together!</h2>

            <motion.div
              className="icons"
              initial="initial"
              animate={controls}
              variants={textVariants}
            >
              <motion.a
                href="https://github.com/LaviniaTinca?tab=repositories"
                variants={textVariants}
              >
                <img
                  src="/github.png"
                  alt="github icon"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "auto",
                    height: "auto",
                  }}
                />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/lavinia-tinca-6b4231240/"
                variants={textVariants}
              >
                <img
                  src="/linkedin.png"
                  alt="linkedin icon"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "auto",
                    height: "auto",
                  }}
                />
              </motion.a>
            </motion.div>
            <motion.div variants={textVariants} className="buttons">
              <motion.button
                variants={textVariants}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#c6ad8f",
                  border: "none",
                  fontWeight: "bold",
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
                onClick={() => window.open("/cv.pdf")}
              >
                Download CV
              </motion.button>
              <motion.button
                variants={textVariants}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#c6ad8f",
                  border: "none",
                  fontWeight: "bold",
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
              >
                <a href="mailto:laviniaanamariatinca@gmail.com">Send email</a>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* <div
        style={{
          width: 200,
          height: 200,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke="blue"
            d="M 10,10 L 190,10 L 190,190 L 10,190 Z"
            initial={{ strokeDasharray: 200, strokeDashoffset: 200 }}
            animate={{
              strokeDashoffset: [200, 0, 200, 0, 200, 0, 200], // Animate to control drawing and disappearing
            }}
            transition={{
              duration: 8, // Total duration for one loop
              repeat: Infinity, // Repeat the animation infinitely
              repeatType: "loop", // Restart from the beginning after completion
              ease: "linear",
            }}
          />
        </motion.svg>
        <motion.div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            textAlign: "center",
            width: "100%",
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Your Text Here
          </motion.p>
        </motion.div>
      </div> */}
      {/* <div
        style={{
          width: 800,
          height: 800,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <motion.path
            fill="none"
            strokeWidth="1"
            stroke="#c6ad8f"
            d="M 10,10 L 190,10 L 190,190 L 10,190 Z"
            initial={{ strokeDasharray: 200, strokeDashoffset: 200 }}
            animate={{
              strokeDashoffset: [200, 0, 200, 0, 200, 0, 200],
              strokeDasharray: [200, 200, 200, 0, 0, 0, 200],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        </motion.svg>
        <motion.div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            textAlign: "center",
            width: "100%",
          }}
        >
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
          >
            <img src="./assets/email.png" alt="Email icon" />
            <p>
              <a href="mailto:laviniaanamariatinca@gmail.com">Send email</a>
            </p>
            <img
              src="/linkedin.png"
              alt="LinkedIn icon"
              // class="icon contact-icon"
            />
            <p>
              <a href="www.linkedin.com/in/lavinia-tinca-6b4231240">LinkedIn</a>
            </p>
          </motion.p>
        </motion.div>
      </div> */}
    </div>
  );
};

export default Contact;
