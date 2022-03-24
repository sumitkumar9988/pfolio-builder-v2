import React from "react";
import { motion } from "framer-motion";

const SideBarItemButton = ({ children }) => {
  return (
    <motion.div
      whileHover={{
        backgroundColor: "#3C4043",
        transition: { duration: 0.2 },
      }}
      whileTap={{ backgroundColor: "#6BF178", scale: 0.9 }}
      className=" tw-p-2 tw-rounded-full tw-cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

export default SideBarItemButton;
