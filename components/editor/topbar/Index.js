import { useState, useRef } from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import LaptopIcon from "@mui/icons-material/Laptop";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import HandIcon from "./HandIcon.js";
import ThemeMainDrawer from "./../drawer/themeDrawer/Index";

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [isThemeActive, setIsThemeActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);
  const {
    isOpen: isThemeDrawerOpen,
    onOpen: onThemeDrawerOpen,
    onClose: onThemeDrawerClose,
  } = useDisclosure();

  const themeDrawerRefButton = useRef();

  // const toggleDetailsPopover = () => {
  //   setIsThemeActive(false);
  //   setIsDetailActive(!isDetailActive);
  // };

  // const toggleThemePopover = () => {
  //   setIsDetailActive(false);
  //   setIsThemeActive(!isThemeActive);
  // };

  const firstFieldRef = useRef(null);

  return (
    <>
      <div className="tw-flex tw-items-center tw-h-20 tw-w-full tw-justify-between tw-flex-row tw-flex-wrap tw-grow tw-px-8 ">
        <div className="tw-flex tw-flex-row tw-gap-4  ">
          {/* Button to trigger Drawer to change theme and include all subtheme */}
          <motion.div>
            {/* <Popover placement="bottom-start">
            <PopoverTrigger> */}

            <Button
              ref={themeDrawerRefButton}
              bg={isThemeDrawerOpen && "primary.1"}
              color={isThemeDrawerOpen ? "black" : "white"}
              _hover={{ bg: null }}
              _focus={{ bg: null }}
              fontFamily="body"
              variant="solid"
              px={3}
              size="sm"
              borderRadius="full"
              onClick={onThemeDrawerOpen}
            >
              Theme
            </Button>
            {/* </PopoverTrigger>
            <ThemePopover />
          </Popover> */}
          </motion.div>

          {/* Button to trigger Drawer for Your details to change all user details section */}

          <motion.div>
            {/* <Popover
              placement="bottom-start"
              isLazy
              _focus={{
                color: "red.500",
              }}
            >
              <PopoverTrigger> */}
            <Button
              bg={isDetailActive && "primary.1"}
              color={isDetailActive ? "black" : "white"}
              _hover={{ bg: null }}
              _focus={{ bg: null }}
              fontFamily="body"
              variant="solid"
              px={3}
              size="sm"
              borderRadius="full"
              onClick={toggleDetailsPopover}
            >
              Your Details
            </Button>
            {/* </PopoverTrigger>
              <DetailsPopover />
            </Popover> */}
          </motion.div>
        </div>
        {/* Destop Preiew Button */}
        <div className="tw-flex tw-flex-row tw-gap-2 ">
          <Button
            rightIcon={<LaptopIcon />}
            bg={!isMobile && "primary.1"}
            color={!isMobile ? "black" : "white"}
            _hover={{ bg: null }}
            _focus={{ bg: null }}
            fontFamily="body"
            variant="solid"
            px={3}
            size="sm"
            borderRadius="full"
            onClick={() => setIsMobile(false)}
          >
            Destop
          </Button>
          {/* Mobile Preview Button */}

          <Button
            leftIcon={<PhoneIphoneIcon />}
            bg={isMobile && "primary.1"}
            color={isMobile ? "black" : "white"}
            _hover={{ bg: null }}
            _focus={{ bg: null }}
            fontFamily="body"
            px={3}
            variant="solid"
            size="sm"
            borderRadius="full"
            onClick={() => setIsMobile(true)}
          >
            {isMobile ? "Mobile" : null}
          </Button>
        </div>
        <div className="tw-flex tw-flex-row tw-gap-8 ">
          {/* Enable Preview Page */}
          <Button
            color="white"
            leftIcon={<FullscreenIcon />}
            variant="link"
            _focus={{ bg: null }}
            size="md"
          >
            Preview
          </Button>
          {/* Enable Option to Publish Site  */}
          <Button
            leftIcon={<HandIcon />}
            color="black"
            bg="white"
            _hover={{ bg: "primary.1" }}
            px={4}
            _focus={{ bg: null }}
            variant="solid"
            size="md"
          >
            Publish
          </Button>
        </div>
      </div>
      <ThemeMainDrawer
        onClose={onThemeDrawerClose}
        isOpen={isThemeDrawerOpen}
        finalFocusRef={themeDrawerRefButton}
        placement="left"
      />
    </>
  );
};

export default Index;
