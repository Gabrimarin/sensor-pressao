import { AnimatePresence as APFM, motion } from "framer-motion";
import React from "react";

function AnimatePresence({ isVisible, style = {}, children, ...rest }) {
  return (
    <APFM exitBeforeEnter>
      {isVisible && (
        <motion.div
          {...rest}
          style={style}
          key="modal"
          initial={{ translateX: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          exit={{ opacity: 0, translateX: -10000 }}
        >
          {children}
        </motion.div>
      )}
    </APFM>
  );
}

export default AnimatePresence;
