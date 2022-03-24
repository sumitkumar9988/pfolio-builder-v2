import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Button,
  Input,
  Stack,
  Flex,
  Heading,
  Spacer,
  Icon,
  Box,
  InputGroup,
  InputLeftElement,
  HStack,
  Text,
  Divider,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { fetchFonts } from "./../components/editor/fonts/api";
import Script from "next/script";

const OutlineFilterButton = ({ name }) => {
  return (
    <Button
      bg={"white"}
      color={"black"}
      size="sm"
      variant="outline"
      _hover={{ background: "white" }}
      _focus={{ borderColor: "primary.1" }}
    >
      {name}
    </Button>
  );
};

const FontItem = ({ font }) => {
  return (
    <Stack spacing={2}>
      <Text fontSize="base">{font.family}</Text>
      <Text fontSize="2xl">Avenir</Text>
      <Divider borderWidth={"1px"} borderColor={"gray.500"} />
    </Stack>
  );
};

const Modals = () => {
  const [fonts, setFonts] = useState(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [error, SetError] = useState("Loading...");
  const [search, setSearch] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: iO, onOpen: oO, onClose: oC } = useDisclosure();

  const btnRef = React.useRef();
  const btnRef2 = React.useRef();

  useEffect(() => {
    fetchFonts()
      .then((fonts) => {
        setFonts(fonts);
        console.log("fonts", fonts);
        setFontsLoaded(true);
      })
      .catch((err) => {
        SetError(err);
      });
  }, [search]);

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Stack overflow={"scroll"}>
            <Box boxShadow="2xl" p="6" rounded="md" bg="white">
              <Stack spacing={8} py={4}>
                <Box>
                  <Flex direction={"row"}>
                    <Heading as="h3" size="lg">
                      Choose fonts
                    </Heading>
                    <Spacer />
                    <Icon as={CloseIcon} cursor={"pointer"} onClick={onClose} />
                  </Flex>
                </Box>
                <Box>
                  <Stack spacing={4}>
                    <HStack>
                      <InputGroup size={"lg"}>
                        <InputLeftElement
                          pointerEvents="none"
                          // eslint-disable-next-line react/no-children-prop
                          children={<Icon as={SearchIcon} color="gray.300" />}
                        />
                        <Input placeholder="Search" />
                      </InputGroup>
                      <Icon
                        as={FilterListIcon}
                        cursor={"pointer"}
                        color="primary.1"
                      />
                    </HStack>
                    <Flex wrap={"wrap"} gap={"2"}>
                      <OutlineFilterButton name="All" />
                      <OutlineFilterButton name="Display" />
                      <OutlineFilterButton name="Serif" />
                      <OutlineFilterButton name="Sans serif" />
                      <OutlineFilterButton name="Handwriting" />
                      <OutlineFilterButton name="Monospace" />
                    </Flex>
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <Box p={4} overflowY={"scroll"}>
              <Stack spacing={4} overflowY={"scroll"}>
                {fonts &&
                  fonts.map((font, item) => (
                    <FontItem font={font} key={item} />
                  ))}
              </Stack>
            </Box>
          </Stack>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Modals;
