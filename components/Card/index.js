import { Box, Paper } from "@mui/material";

const Card = ({ children, ...rest }) => {
  return (
    <Paper
      sx={{
        minHeight: "90vh",
      }}
    >
      <Box
        sx={{
          p: "50px 80px",
        }}
      >
        {children}
      </Box>
    </Paper>
  );
};

export default Card;