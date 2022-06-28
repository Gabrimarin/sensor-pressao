import { Box, Typography } from "@mui/material";
import { motion, animate } from "framer-motion";
import { North, South } from "@mui/icons-material";

import { useEffect, useRef } from "react";

function Counter({
  from,
  to,
  duration,
  repeatType = "loop",
  repeatDelay = 0,
  repeat = Infinity,
}) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration,
      repeatDelay,
      repeat,
      repeatType,
      onUpdate(value) {
        node.textContent = value.toFixed(2);
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <Typography variant="h1" ref={nodeRef} />;
}

function Animation() {
  const duration = 3;
  const repeatDelay = 1;
  const repeatType = "reverse";
  const repeat = Infinity;
  return (
    <Box
      display="flex"
      flexDirection="row"
      marginTop={10}
      style={{ scale: 0.8 }}
    >
      {/* <motion.div
        animate={{ y: -100, opacity: 0 }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <North />
      </motion.div>
      <motion.div
        animate={{ y: 100, opacity: 0 }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <South />
      </motion.div> */}
      <Box display="flex" flexDirection={"column"}>
        <motion.img
          src={"/images/paralelepipedo.png"}
          style={{  height: 500, objectFit: 'contain', y: 140 }}
        />
        <motion.img src={"/images/paralelogram.png"} />
      </Box>

      <Box display="flex" flexDirection={"column"}>
        <motion.img
          src={"/images/paralelepipedo2.png"}
          // animate={{  y: 200 }}
          style={{  width: 500, objectFit: 'contain', y: 150  }}
          transition={{ repeatType, repeat, duration, repeatDelay }}
        />
        <motion.img src={"/images/paralelogram.png"} />
      </Box>
      <Counter
        from={0}
        to={100}
        repeatDelay={repeatDelay}
        repeatType={repeatType}
        duration={duration}
      />
    </Box>
  );
}

export default Animation;
