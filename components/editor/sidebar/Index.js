import { Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import SettingsIcon from "@mui/icons-material/Settings";
import SideBarItemButton from "./SideBarItemButton.js";

const Index = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      transition={{ duration: 1 }}
      animate={{ width: "70px" }}
      className="tw-h-screen tw-w-20 tw-bg-dark-1"
    >
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        animate={{ opacity: 1 }}
        className="tw-flex tw-flex-col tw-justify-between tw-items-center tw-h-full tw-w-full"
      >
        <div className="tw-flex tw-flex-col tw-justify-start  tw-items-center tw-h-full tw-w-full tw-gap-4 tw-pt-4">
          <SideBarItemButton>
            <Icon as={ArrowBackIcon} color="white" />
          </SideBarItemButton>
          <div className="tw-pt-12 ">
            <SideBarItemButton>
              <Icon as={ViewAgendaIcon} color="white" />
            </SideBarItemButton>
          </div>{" "}
          <SideBarItemButton>
            <Icon as={AddCircleIcon} color="white" />
          </SideBarItemButton>
          <SideBarItemButton>
            <Icon as={UndoIcon} color="white" />
          </SideBarItemButton>
          <SideBarItemButton>
            <Icon as={RedoIcon} color="white" />
          </SideBarItemButton>{" "}
        </div>
        <div className="tw-py-12">
          <SideBarItemButton>
            <Icon as={SettingsIcon} color="white" />
          </SideBarItemButton>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Index;
