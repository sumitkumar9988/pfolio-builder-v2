import {
  DrawerContent,
  Box,
  DrawerHeader,
  DrawerBody,
  VStack,
  HStack,
  Heading,
  Flex,
  Spacer,
  Icon,
  Text,
  Circle,
  Divider,
  Stack,
  Drawer,
  useDisclosure,
} from "@chakra-ui/react";
import AddIcon from "@mui/icons-material/Add";

const ThemeDemo = () => {
  return (
    <Box cursor={"pointer"} className="tw-w-20  tw-h-12 tw-my-2">
      <Stack gap={1} borderWidth={"2px"} p={2} bg={"blue.400"} rounded={"xl"}>
        <Box height="20px" width={"60px"} bg="red.500" />
        <Box height="20px" bg="White" />
      </Stack>
    </Box>
  );
};

const Index = ({ onClose, isOpen, finalFocusRef, placement }) => {
  const {
    isOpen: isSecondDrawerOpen,
    onOpen: onSecondDrawerOpen,
    onClose: onSecondDrawerClose,
  } = useDisclosure();
  const {
    isOpen: isThirdDrawerOpen,
    onOpen: onThirdDrawerOpen,
    onClose: onThirdDrawerClose,
  } = useDisclosure();


  return (

    // Main Drawer to Change all theme 
    
    <Drawer
      blockScrollOnMount={false}
      isOpen={isOpen}
      placement={placement}
      onClose={onClose}
      mt={"40px"}
      finalFocusRef={finalFocusRef}
    >
      <DrawerContent
        maxW={"380px"}
        px="12px"
        py="12px"
        mt="80px"
        ml={"80px"}
        rounded={"2xl"}
      >
        <DrawerBody>
          <Box overflowY={"scroll"}>
            <VStack spacing={8} align="stretch">
              <VStack spacing={4} align="stretch">
                <Heading
                  fontSize="2xl"
                  fontFamily={"heading"}
                  fontWeight="bold"
                  textAlign={"start"}
                >
                  Presets
                </Heading>
                <Flex gap={2} wrap={"wrap"}>
                  <ThemeDemo />
                  <ThemeDemo />
                  <ThemeDemo />
                  <ThemeDemo />
                  <ThemeDemo />
                  <ThemeDemo />
                </Flex>
              </VStack>
              <Box>
                <Heading
                  fontSize="2xl"
                  fontFamily={"heading"}
                  fontWeight="bold"
                  textAlign={"start"}
                >
                  Edit theme
                </Heading>
              </Box>
              <Box>
                <VStack spacing={4} align="stretch">
                  <Flex>
                    <Heading
                      fontSize="md"
                      fontFamily={"heading"}
                      fontWeight="bold"
                      textAlign={"start"}
                    >
                      Colors
                    </Heading>
                    <Spacer />

                    <Icon as={AddIcon} cursor={"pointer"} />
                  </Flex>
                  <VStack spacing={4} align="stretch">
                    <Flex>
                      <Text
                        fontSize="md"
                        fontFamily={"body"}
                        fontWeight="bold"
                        textAlign={"start"}
                      >
                        Background
                      </Text>
                      <Spacer />
                      <Circle
                        size="28px"
                        border={"2px"}
                        borderColor="black"
                        bg="white"
                        color="white"
                        cursor={"pointer"}
                      />
                    </Flex>
                    <Flex>
                      <Text
                        fontSize="md"
                        fontFamily={"body"}
                        fontWeight="bold"
                        textAlign={"start"}
                      >
                        Primary
                      </Text>
                      <Spacer />
                      <Circle
                        size="28px"
                        bg="green.500"
                        color="white"
                        cursor={"pointer"}
                      />
                    </Flex>{" "}
                    <Flex>
                      <Text
                        fontSize="md"
                        fontFamily={"body"}
                        fontWeight="bold"
                        textAlign={"start"}
                      >
                        Secondary
                      </Text>
                      <Spacer />
                      <HStack spacing={2}>
                        <Circle
                          size="28px"
                          border={"2px"}
                          borderColor="black"
                          bg="black"
                          cursor={"pointer"}
                          color="black"
                        />
                        <Circle
                          size="28px"
                          border={"2px"}
                          borderColor="black"
                          bg="blue.500"
                          color="white"
                          cursor={"pointer"}
                        />
                      </HStack>
                    </Flex>
                  </VStack>
                </VStack>
              </Box>
              <Divider borderWidth={"1px"} borderColor={"gray.500"} />
              <Box>
                <VStack spacing={4} align="stretch">
                  <Flex>
                    <Heading
                      fontSize="md"
                      fontFamily={"heading"}
                      fontWeight="bold"
                      textAlign={"start"}
                    >
                      Fonts
                    </Heading>
                    <Spacer />
                    <Icon
                      as={AddIcon}
                      cursor={"pointer"}
                      onClick={onSecondDrawerOpen}
                    />
                  </Flex>
                  <Flex>
                    <Heading
                      fontSize="md"
                      fontFamily={"heading"}
                      fontWeight="bold"
                      textAlign={"start"}
                    >
                      Fonts
                    </Heading>
                    <Spacer />
                    <Icon
                      as={AddIcon}
                      cursor={"pointer"}
                      onClick={onThirdDrawerOpen}
                    />
                  </Flex>
                  <Stack></Stack>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </DrawerBody>
      </DrawerContent>
     {/* All other Drawer */}
    </Drawer>
  );
};

export default Index;
