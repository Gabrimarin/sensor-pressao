import { Box, Divider } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function PressureSample() {
  return (
    <Carousel>
      {[Step1, Step2].map((Step, index) => {
        return (
          // <Box height={"100%"}>
          <Step key={index} />
          // <Divider />
          // </Box>
        );
      })}
    </Carousel>
  );
}

export default PressureSample;
