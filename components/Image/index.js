import { Box, Typography } from "@mui/material";
import { CameraAltOutlined, Visibility } from "@mui/icons-material";

function Image({
  size = ["100%", "100%"],
  src,
  containerSize = ["40%", "50%"],
  legend = "",
  ...props
}) {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      justifyContent="center"
      my={5}
      mx="auto"
      width={containerSize[0]}
      sx={{ width: { xs: 300, sm: "69%", md: 300, lg: 450, xl: 400 } }}
    >
      <img
        width={"100%"}
        src={src}
        style={{
          alignSelf: "center",
          justifyContent: "center",
          width: "100%",
          margin: "auto",
          marginBottom: 20,
          marginTop: 20,
          borderRadius: 20,
          boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.3)",
        }}
      />
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography
          color="primary"
          variant="caption"
          align="center"
          fontWeight={600}
          sx={{ display: "flex" }}
        >
          <Visibility fontSize={"small"} />
          <Box width={4} />
          {legend}
        </Typography>
      </Box>
    </Box>
  );
}

export default Image;
