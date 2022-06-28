import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { motion, useAnimation, useis } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  visible: { y: 110, transition: { duration: 2 } },
  hidden: { y: 0 },
};

function Step2() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <Box height={"100%"} width="100%">
      <Box
        width={"fit-content"}
        position="relative"
        marginTop={5}
        marginRight={10}
      >
        <Box display="flex" flexDirection={"column"}>
          <motion.img
            ref={ref}
            animate={controls}
            initial={"hidden"}
            variants={variants}
            src="images/paralelepipedo.png"
            height={300}
            width="auto"
            style={{ objectFit: "contain" }}
          />
          <img src="images/tabua.png" width={500} />
        </Box>
      </Box>
    </Box>
  );
}

export default Step2;
