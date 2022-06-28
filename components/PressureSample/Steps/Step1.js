import { Box, Typography } from "@mui/material";
import { West, North, South } from "@mui/icons-material";
import { motion } from "framer-motion";

const bounceAnimation = (x = 0, y = 0) => ({
  animate: { y, x },
  transition: {
    repeat: Infinity,
    repeatType: "reverse",
    duration: 1,
  },
});

const Bounce = ({ children, x, y, style }) => (
  <motion.div
    animate={{ x, y }}
    transition={{
      repeat: Infinity,
      repeatType: "reverse",
      duration: 1,
    }}
    style={style}
  >
    {children}
  </motion.div>
);

function Step1() {
  return (
    <Box height={"100%"} width={"100%"}>
      <Typography variant="h5">
        ESTE É UM{" "}
        <Typography
          variant="h5"
          color="primary"
          display="inline"
          style={{ fontWeight: "bold" }}
        >
          PARALELEPÍPEDO
        </Typography>
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box
          width={"fit-content"}
          position="relative"
          marginTop={5}
          marginRight={10}
        >
          <motion.div>
            <img src="images/paralelepipedo.png" height={400} />
          </motion.div>
          <Bounce
            y={20}
            style={{ color: "red", position: "absolute", left: "40%" }}
          >
            <North />
          </Bounce>
          <Bounce
            y={-20}
            style={{
              color: "red",
              position: "absolute",
              left: "40%",
              top: -27,
            }}
          >
            <South />
          </Bounce>
          <Bounce
            x={20}
            style={{
              color: "green",
              position: "absolute",
              right: -20,
              top: "50%",
            }}
          >
            <West />
          </Bounce>
        </Box>
        <Box borderRadius={6} padding={4} border="1px solid #aaa">
          <Typography variant="h6">
            Ele pesa{" "}
            <Box fontWeight="bold" color="primary" display="inline">
              1kg
            </Box>
          </Typography>
          <Typography variant="h6">
            Tem faces com uma área <Box color="red">MENOR</Box>
          </Typography>
          <Typography variant="h6">
            E faces com uma área <Box color="green">MAIOR</Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Step1;
