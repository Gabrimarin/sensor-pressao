import {
  Box,
  Button,
  Card,
  Collapse,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Image from "../Image";

function StopToThink({ title, question, image, answer }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Box>
      <Typography variant="h5">{title}</Typography>
        <Image
          src={image}
          containerSize={["30%"]}
        />
      <Typography>{question}</Typography>
      <Card
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          p: 2,
          my: 5
        }}
      >
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Typography variant="h5" sx={{display:'flex', alignItems: 'center'}}>
          ✅
            Resposta
          </Typography>
          <Button
            variant="contained"
            onClick={() => setOpen((prev) => !prev)}
            sx={{ backgroundColor: "primary.light" }}
            startIcon={
              !open ? (
                <Visibility style={{ fontSize: 30 }} />
              ) : (
                <VisibilityOff style={{ fontSize: 30 }} />
              )
            }
          >
            <Typography>
              {open ? "Ocultar" : "Mostrar"}
            </Typography>
          </Button>
        </Box>
        <Collapse in={open}>
          <Divider
            sx={{ background: "white", marginTop: 3, marginBottom: 3 }}
          />
          <Typography component="span">{answer}</Typography>
        </Collapse>
      </Card>
    </Box>
  );
}

export default StopToThink;
