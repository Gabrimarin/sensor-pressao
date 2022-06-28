import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import theme from "../../styles/theme";

const pages = {
  "/": "O Sensor",
  "/teoria": "Teoria",
  "/aplicacao": "Aplicação",
};

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    color: "primary",
  });
}

export default function ElevateAppBar(props) {
  const { pathname, push } = useRouter();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar disableGutters>
            <Box
              sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
            >
              {Object.entries(pages).map(([route, label]) => {
                const isActive = pathname === route;
                const boxShadow = isActive
                  ? `inset 0px 1px 6px rgba(0, 0, 0, 1)`
                  : `0px 1.5px 2px 2px rgba(0, 0, 0, 0.2)`;
                return (
                  <Button
                    key={route}
                    variant="contained"
                    onClick={() => push(route)}
                    sx={{
                      borderRadius: 0,
                      mx: 0.5,
                      boxShadow,
                      height: "100%",
                      bgcolor: 'primary.light',
                      ":hover": {
                        boxShadow: boxShadow,
                        backgroundColor: "primary.main",
                      },
                    }}
                  >
                    {label}
                  </Button>
                );
              })}
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
